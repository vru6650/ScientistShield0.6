export function Skeleton({ className = '' }) {
  return (
    <div className={`animate-pulse rounded-md bg-neutral dark:bg-neutral ${className}`} />
  );
}
