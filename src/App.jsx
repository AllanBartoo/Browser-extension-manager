import ExtensionList from "./components/ExtensionList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="lg:max-w-[80%] mx-auto min-h-screen">
      <Navbar />
      <ExtensionList />
    </div>
  );
};

export default App;
