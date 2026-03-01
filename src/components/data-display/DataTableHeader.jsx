export default function DataTableHeader({ columns }) {
  return (
    <thead className="border-b bg-gray-200 sticky top-0">
      <tr>
        {columns.map(({ key, label }) => (
          <th key={key} className="px-4 py-2 text-left">
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
