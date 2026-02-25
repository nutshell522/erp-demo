export default function Card({ children, cols = 3 }) {
  return <div className={`border last:border-0 grid grid-cols-${cols} gap-x-4 bg-white`}>{children}</div>;
}
