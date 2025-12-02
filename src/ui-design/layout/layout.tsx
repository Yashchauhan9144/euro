import { ReactNode } from "react";
import { useLocation } from 'react-router-dom';
import DesignerHeader from "./header";
import DesignerFooter from "./footer";

interface Props {
  children?: ReactNode;
}

const DesignerLayout = ({ children }: Props) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
  <>
    <div className="wrapper">
      <DesignerHeader isHomePage={isHomePage} />
      <main className="main-content">{children}</main>
      <DesignerFooter />
    </div>
  </>
  );
};

export default DesignerLayout;
