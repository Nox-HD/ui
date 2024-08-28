import Sidebar from "./sidebar";

export default function DocsLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-1/4 overflow-y-auto h-screen sidebar">
        <Sidebar />
      </aside>
      <main className="flex-1 px-12 pb-12 pr-32 pt-24 overflow-y-auto h-screen content">
        {children}
      </main>
    </div>
  );
}
