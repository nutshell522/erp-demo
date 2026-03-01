export default function FormTotalDisplay({ value }) {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-nowrap">總額</span>
      <span className="text-nowrap">{value}</span>
    </div>
  );
}
