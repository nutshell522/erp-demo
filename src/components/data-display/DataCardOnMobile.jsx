import CardRow from '../card/CardRow';
import Button from '../control/Button';

export default function DataCardOnMobile({ data, onDelete }) {
  return (
    <>
      <ul className="block md:hidden flex-1 overflow-y-auto">
        {data.map(({ id, name, price, quantity, total }) => (
          <li key={id}>
            <div className={`border last:border-0 grid grid-cols-3 gap-x-4 bg-white`}>
              <CardRow title="品名" className="col-span-2">
                {name}
              </CardRow>
              <Button variant="danger" onClick={() => onDelete(id)}>
                刪除
              </Button>
              <CardRow title="價格">{price}</CardRow>
              <CardRow title="數量">{quantity}</CardRow>
              <CardRow title="總額">{total}</CardRow>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
