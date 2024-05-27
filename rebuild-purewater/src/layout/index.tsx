import { ReactNode } from 'react';

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <>
        {children}
    </>
  )
};

export default Layout;
