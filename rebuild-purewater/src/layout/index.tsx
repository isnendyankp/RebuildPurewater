import { ReactNode } from 'react';

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  return <div>index</div>;
};

export default Layout;
