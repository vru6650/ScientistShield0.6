import { Link } from 'react-router-dom';

export default function AccessDenied() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center'>
      <h1 className='text-6xl font-bold text-text'>Access Denied</h1>
      <p className='text-xl mt-4 text-muted'>You do not have permission to view this page.</p>
      <Link to='/' className='mt-6 px-4 py-2 text-primary-foreground bg-gradient-to-r from-primary via-secondary to-accent rounded-lg'>
        Go back to Home
      </Link>
    </div>
  );
}
