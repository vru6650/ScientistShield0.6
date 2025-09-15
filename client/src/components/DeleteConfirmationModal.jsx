import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
    return (
        <Modal show={isOpen} size='md' onClose={onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className='text-center'>
                    <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-muted dark:text-muted' />
                    <h3 className='mb-5 text-lg font-normal text-muted dark:text-muted'>
                        Are you sure you want to delete this comment?
                    </h3>
                    <div className='flex justify-center gap-4'>
                        <Button color='failure' onClick={onConfirm}>
                            {"Yes, I'm sure"}
                        </Button>
                        <Button color='gray' onClick={onClose}>
                            No, cancel
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}