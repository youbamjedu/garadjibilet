import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router'; // 
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollProgress } from './Editorial';

export function RootLayout() {
  const { pathname } = useLocation(); // 

  useEffect(() => {
    window.scrollTo(0, 0); //
  }, [pathname]);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#05080F]">
      <ScrollProgress />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}