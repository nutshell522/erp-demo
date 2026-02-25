import Button from '../control/Button';

export default function DataTableOnPC({ data, onDelete }) {
  return (
    <div className="hidden md:block flex-1 border border-gray-300 bg-white rounded-b-lg overflow-y-auto">
      <table className="w-full border-collapse">
        <thead className="border-b bg-gray-200 sticky top-0">
          <tr>
            <th className="px-4 py-2 text-left">品名</th>
            <th className="px-4 py-2 text-left">價格</th>
            <th className="px-4 py-2 text-left">數量</th>
            <th className="px-4 py-2 text-left">總額</th>
            <th className="px-4 py-2 text-left">動作</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, price, quantity, total }) => (
            <tr key={id} className="border-b last:border-0">
              <td className="px-4 py-2">{name}</td>
              <td className="px-4 py-2">{price}</td>
              <td className="px-4 py-2">{quantity}</td>
              <td className="px-4 py-2">{total}</td>
              <td className="px-4 py-2">
                <Button variant="danger" onClick={() => onDelete(id)}>
                  刪除
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
