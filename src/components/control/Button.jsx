const color = {
  success: 'bg-green-600',
  primary: 'bg-blue-600',
  danger: 'bg-red-600',
};

export default function Button({ variant, className, ...props }) {
  return <button className={`px-3 py-1 text-white rounded-sm font-bold text-nowrap ${color[variant]} ${className}`} {...props} />;
}
