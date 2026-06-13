import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function Layout({ children, currentPage, setCurrentPage }: { children: React.ReactNode, currentPage: string, setCurrentPage: (page: string) => void }) {
  return (
    <div className="flex min-h-screen w-full bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50/30 dark:bg-gray-950 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
