import "./App.css";
import ApparelImage from "./components/ApparelImage/ApparelImage.jsx";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Content />
      </div>
      <ApparelImage />
    </div>
  );
}

export default App;
