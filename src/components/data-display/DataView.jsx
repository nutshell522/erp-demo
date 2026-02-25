import DataTableOnPC from './DataTableOnPC';
import DataCardOnMobile from './DataCardOnMobile';
import { useData } from '../../hooks/useData';

export default function DataView() {
  const { data, deleteItem } = useData();

  return (
    <>
      {/* 明細標題 */}
      <div className="bg-gray-50 border text-center">明細</div>
      {/* 電腦端顯示資料 */}
      <DataTableOnPC data={data} onDelete={deleteItem} />
      {/* 行動裝置端顯示資料 */}
      <DataCardOnMobile data={data} onDelete={deleteItem} />
    </>
  );
}
