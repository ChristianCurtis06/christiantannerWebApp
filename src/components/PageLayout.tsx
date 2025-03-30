import NavBar from "./NavBar";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default PageLayout;