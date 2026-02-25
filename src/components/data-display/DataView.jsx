import DataTableOnPC from './DataTableOnPC';
import DataCardOnMobile from './DataCardOnMobile';

export default function DataView() {
  return (
    <>
      {/* 明細標題 */}
      <div className="bg-gray-50 border text-center">明細</div>
      {/* 電腦端顯示資料 */}
      <DataTableOnPC />
      {/* 行動裝置端顯示資料 */}
      <DataCardOnMobile />
    </>
  );
}
