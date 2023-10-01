import { Searchbar, Sidebar, MusicPlayer } from './components';
import { Router } from './router';

const App = () => {
  return (
    <div className="relative flex">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-900">
        <div className="h-[80px] pt-4">
          <Searchbar />
        </div>

        <div className=" h-[calc(100vh-80px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Router />
          </div>
        </div>
      </div>

      <div className="absolute h-[100px] bottom-0 left-0 right-0 flex animate-slideup bg-[#1e1e1e] backdrop-blur-lg z-10">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default App;
