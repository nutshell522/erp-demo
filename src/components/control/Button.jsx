export default function Button({ className, ...props }) {
  return <button className={`px-3 py-1 text-white rounded-sm font-bold text-nowrap ${className}`} {...props} />;
}
