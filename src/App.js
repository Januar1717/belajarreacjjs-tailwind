import Sidebar from "./components/slidebar";
import ContentRight from "./components/Content/ContentRight";
import ContentLeft from "./components/Content/ContentLeft";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar />
      <ContentLeft />
      <ContentRight />
    </div>
  )
}

export default App;
