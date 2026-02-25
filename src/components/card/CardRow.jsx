export default function CardRow({ className, title, children }) {
  return (
    <div className={className}>
      <span className="px-4 py-2">{title}</span>
      <span className="px-4 py-2">{children}</span>
    </div>
  );
}
