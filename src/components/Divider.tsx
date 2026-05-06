export default function Divider() {
  return (
    <div className="flex items-center justify-center px-12 py-16 gap-8">
      <div className="flex-1 max-w-[200px] h-px bg-border" />
      <div className="w-2 h-2 border border-accent-light rotate-45" />
      <div className="flex-1 max-w-[200px] h-px bg-border" />
    </div>
  );
}
