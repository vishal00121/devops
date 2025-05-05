import Footer from './Footer';
import Sidebar from './Sidebar'; // Assuming Sidebar is in the components folder
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex">
      {/* Sidebar (Smaller width & Responsive) */}
      <div className="hidden lg:block bg-gray-200 w-52 fixed h-screen">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="ml-0 md:ml-52 flex flex-col min-h-screen w-full">
        {/* Main Content */}
        <div className="flex-grow p-4">
          <Outlet />
        </div>

        {/* Footer */}
        <div className="text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
