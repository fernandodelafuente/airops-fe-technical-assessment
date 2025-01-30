import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar/sidebar';
import { Workflows } from '@/pages/workflows/workflows';

export default function App() {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <main className='flex-1 flex flex-col'>
        <Header />
        <div className='flex-1 p-6 overflow-auto'>
          {/* I would add a Router here to navigate to the different pages. For challenge purposes, I will just show the Workflows page */}
          <Workflows />
        </div>
      </main>
    </div>
  );
}
