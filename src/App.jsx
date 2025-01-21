import "./App.css";
import Page from "./components/Page/Page.jsx";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="top-0 bg-red-200">
          outside
          <div className="w-screen h-screen static bg-green-200">
            <div>inside * 2</div>inside
          </div>
        </div>
      </div>

      <Page />
    </>
  );
}

export default App;
