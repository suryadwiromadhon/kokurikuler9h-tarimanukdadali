import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundBlobs from './BackgroundBlobs';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <BackgroundBlobs />
      <Navbar />
      <main className="pt-24 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;