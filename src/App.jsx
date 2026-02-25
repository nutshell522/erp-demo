import Layout from './layouts/Layout';
import FormRow from './components/form/FormRow';
import { DataProvider } from './contexts/dataContext';
import DataView from './components/data-display/DataView';

function App() {
  return (
    <>
      <Layout>
        <DataProvider>
          {/* 新增表單 */}
          <FormRow />
          {/* 資料畫面 */}
          <DataView />
        </DataProvider>
      </Layout>
    </>
  );
}

export default App;
