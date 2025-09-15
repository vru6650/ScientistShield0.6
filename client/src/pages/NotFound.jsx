import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center'>
            <h1 className='text-6xl font-bold text-text'>404</h1>
            <p className='text-xl mt-4 text-muted'>Oops! Page Not Found.</p>
            <p className='mt-2 text-muted'>The page you are looking for does not exist.</p>
            <Link to='/'>
                <button className='mt-6 px-4 py-2 text-primary-foreground bg-gradient-to-r from-primary via-secondary to-accent rounded-lg'>
                    Go back to Home
                </button>
            </Link>
        </div>
    );
}