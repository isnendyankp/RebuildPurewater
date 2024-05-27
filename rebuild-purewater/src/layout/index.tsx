
import { ReactNode } from 'react';

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
};

export default Layout;
