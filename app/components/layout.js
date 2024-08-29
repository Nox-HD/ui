import Sidebar from "./sidebar";

export default function DocsLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-0 md:w-1/4 overflow-y-auto h-screen sidebar invisible md:visible">
        <Sidebar />
      </aside>
      <main className="flex-1 px-10 md:px-12 pb-12 md:pr-32 pt-24 overflow-y-auto h-screen content">
        {children}
      </main>
    </div>
  );
}
