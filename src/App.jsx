import Layout from './layouts/Layout';
import DataForm from './components/form/DataForm';
import { DataProvider } from './contexts/dataContext';
import DataView from './components/data-display/DataView';

function App() {
  return (
    <>
      <Layout>
        <DataProvider>
          {/* 新增表單 */}
          <DataForm />
          {/* 資料畫面 */}
          <DataView />
        </DataProvider>
      </Layout>
    </>
  );
}

export default App;
