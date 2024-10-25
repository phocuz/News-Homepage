
import MainContent from "./MainContent"
import SideBar from "./SideBar"

function Main (){
  return (
    <div className="
     grid lg:grid-cols-2 gap-20 bg-white shadow-lg mt-10
    ">
     <MainContent />
      <SideBar />
    </div>
  );
};

export default Main;