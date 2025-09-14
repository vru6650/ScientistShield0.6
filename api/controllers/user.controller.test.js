import { updateUser } from './user.controller.js';
import User from '../models/user.model.js';

// Helper to create a mock request, response and next function
function createMockResponse() {
    return {
        statusCode: null,
        body: null,
        status(code) {
            this.statusCode = code;
            return this;
        },
        json(payload) {
            this.body = payload;
            return this;
        },
    };
}

describe('updateUser', () => {
    test('admin users can update other user accounts', async () => {
        // Save original method to restore later
        const originalFindById = User.findById;

        // Mock the database call to findById
        User.findById = async () => ({
            username: 'oldname',
            email: 'user@example.com',
            profilePicture: 'pic.png',
            _doc: {
                username: 'oldname',
                email: 'user@example.com',
                profilePicture: 'pic.png',
                password: 'hashed',
            },
            async save() {
                // Simulate mongoose save updating the _doc property
                this._doc = {
                    username: this.username,
                    email: this.email,
                    profilePicture: this.profilePicture,
                    password: 'hashed',
                };
                return this;
            },
        });

        const req = {
            user: { id: 'adminId', isAdmin: true },
            params: { userId: 'targetUser' },
            body: { username: 'newname' },
        };
        const res = createMockResponse();
        let nextErr = null;
        const next = (err) => {
            nextErr = err;
        };

        await updateUser(req, res, next);

        expect(nextErr).toBeNull();
        expect(res.statusCode).toBe(200);
        expect(res.body.username).toBe('newname');
        expect('password' in res.body).toBe(false);

        // Restore original method
        User.findById = originalFindById;
    });

    test('non-admin users cannot update other user accounts', async () => {
        const req = {
            user: { id: 'user1', isAdmin: false },
            params: { userId: 'otherUser' },
            body: { username: 'newname' },
        };
        const res = createMockResponse();
        let nextErr = null;
        const next = (err) => {
            nextErr = err;
        };

        await updateUser(req, res, next);

        expect(nextErr).toBeTruthy();
        expect(nextErr.statusCode).toBe(403);
        expect(nextErr.message).toBe('You are not allowed to update this user');
    });

    test('returns an error for invalid email format', async () => {
        const originalFindById = User.findById;
        User.findById = async () => ({
            username: 'user',
            email: 'user@example.com',
            async save() {
                return this;
            },
            _doc: { username: 'user', email: 'user@example.com', password: 'hashed' },
        });

        const req = {
            user: { id: 'adminId', isAdmin: true },
            params: { userId: 'targetUser' },
            body: { email: 'invalid-email' },
        };
        const res = createMockResponse();
        let nextErr = null;
        const next = (err) => {
            nextErr = err;
        };

        await updateUser(req, res, next);

        expect(nextErr).toBeTruthy();
        expect(nextErr.statusCode).toBe(400);
        expect(nextErr.message).toBe('Invalid email format');

        User.findById = originalFindById;
    });

    test('duplicate username returns a meaningful error', async () => {
        const originalFindById = User.findById;
        User.findById = async () => ({
            username: 'user',
            email: 'user@example.com',
            async save() {
                const err = new Error('dup');
                err.code = 11000;
                err.keyValue = { username: 'existing' };
                throw err;
            },
            _doc: { username: 'user', email: 'user@example.com', password: 'hashed' },
        });

        const req = {
            user: { id: 'adminId', isAdmin: true },
            params: { userId: 'targetUser' },
            body: { username: 'existing' },
        };
        const res = createMockResponse();
        let nextErr = null;
        const next = (err) => {
            nextErr = err;
        };

        await updateUser(req, res, next);

        expect(nextErr).toBeTruthy();
        expect(nextErr.statusCode).toBe(409);
        expect(nextErr.message).toBe('username already exists');

        User.findById = originalFindById;
    });
});
