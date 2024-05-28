import { Navbar, ScrollToTopButton } from '@/components';
import { ReactNode } from 'react';

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
