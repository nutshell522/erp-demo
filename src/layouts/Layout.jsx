import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-100 flex flex-col overflow-hidden">{children}</main>
      </div>
    </>
  );
}
