export default function Layout({ children }) {
  return (
    <>
      <div className="h-screen flex flex-col">
        <header className="h-16 w-full bg-gray-50 shadow-sm">
          <div className="h-full px-6 flex items-center justify-center md:justify-between">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">ERP 系統</h1>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-100 flex flex-col overflow-hidden">{children}</main>
      </div>
    </>
  );
}
