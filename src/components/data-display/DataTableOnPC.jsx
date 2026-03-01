import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';

const COLUMNS = [
  { key: 'name', label: '品名' },
  { key: 'price', label: '價格' },
  { key: 'quantity', label: '數量' },
  { key: 'total', label: '總額' },
  { key: 'action', label: '動作', isAction: true },
];

export default function DataTableOnPC({ data, onDelete }) {
  return (
    <div className="hidden md:block flex-1 border border-gray-300 bg-white rounded-b-lg overflow-y-auto">
      <table className="w-full border-collapse">
        <DataTableHeader columns={COLUMNS} />
        <tbody>
          {data.map((item) => (
            <DataTableRow key={item.id} item={item} columns={COLUMNS} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
