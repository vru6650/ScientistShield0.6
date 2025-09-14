import EmptyState from '../ui/EmptyState.jsx';
import Button from '../ui/Button.jsx';

export default function Cms() {
  return (
    <div className="p-4">
      <EmptyState
        title="Content Management"
        description="Manage your site's content from here."
        action={<Button>Get Started</Button>}
      />
    </div>
  );
}
