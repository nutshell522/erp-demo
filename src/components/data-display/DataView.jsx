import DataTableOnPC from './DataTableOnPC';
import DataCardOnMobile from './DataCardOnMobile';
import SectionTitle from './SectionTitle';
import { useData } from '../../hooks/useData';

export default function DataView() {
  const { data, deleteItem } = useData();

  return (
    <>
      <SectionTitle>明細</SectionTitle>
      {/* 電腦端顯示資料 */}
      <DataTableOnPC data={data} onDelete={deleteItem} />
      {/* 行動裝置端顯示資料 */}
      <DataCardOnMobile data={data} onDelete={deleteItem} />
    </>
  );
}
