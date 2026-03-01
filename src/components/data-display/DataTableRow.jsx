import Button from '../control/Button';

export default function DataTableRow({ item, columns, onDelete }) {
  return (
    <tr className="border-b last:border-0">
      {columns.map(({ key, isAction }) =>
        isAction ? (
          <td key={key} className="px-4 py-2">
            <Button variant="danger" onClick={() => onDelete(item.id)}>
              刪除
            </Button>
          </td>
        ) : (
          <td key={key} className="px-4 py-2">
            {item[key]}
          </td>
        )
      )}
    </tr>
  );
}
