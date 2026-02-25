import { useData } from '../../hooks/useData';
import Card from '../card/Card';
import CardRow from '../card/CardRow';
import Button from '../control/Button';

export default function DataCardOnMobile() {
  const { data, deleteItem } = useData();

  return (
    <>
      <ul className="block md:hidden flex-1 overflow-y-auto">
        {data.map(({ id, name, price, quantity, total }) => (
          <li key={id}>
            <Card>
              <CardRow title="品名" className="col-span-2">
                {name}
              </CardRow>
              <Button className="bg-red-600" onClick={() => deleteItem(id)}>
                刪除
              </Button>
              <CardRow title="價格">{price}</CardRow>
              <CardRow title="數量">{quantity}</CardRow>
              <CardRow title="總額">{total}</CardRow>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
