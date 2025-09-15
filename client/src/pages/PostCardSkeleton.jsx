// A reusable skeleton component for a loading PostCard.
export default function PostCardSkeleton() {
    return (
        <div className='group relative w-full border border-teal-500 hover:border-2 h-[350px] overflow-hidden rounded-lg sm:w-[360px] transition-all animate-pulse'>
            <div className='h-[260px] w-full bg-neutral dark:bg-neutral' />
            <div className='p-3 flex flex-col gap-2'>
                <div className='p-3 h-6 bg-neutral dark:bg-neutral rounded-md' />
                <div className='p-2 h-4 bg-neutral dark:bg-neutral rounded-md w-1/4' />
            </div>
        </div>
    );
}
