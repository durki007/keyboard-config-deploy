import SideBar from '@/components/section/Sidebar.tsx';
import KeyboardConfigurator from '@/components/section/KeyboardConfigurator.tsx';

const Home: React.FC = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <SideBar />
      <KeyboardConfigurator />
    </div>
  );
};

export default Home;
