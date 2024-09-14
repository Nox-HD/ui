import Sidebar from "./sidebar";

export default function DocsLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-0 md:w-[35%] lg:w-[28%] xl:w-[20%] overflow-y-auto h-screen sidebar invisible md:visible">
        <Sidebar />
      </aside>
      <main className="flex-1 px-10 md:px-12 pb-12 pt-24 lg:pr-36 overflow-y-auto h-screen content">
        {children}
      </main>
    </div>
  );
}
