import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import EmailDetail from "./components/EmailDetail";
import EmailList from "./components/EmailList";

function App() {
  return (
    <BrowserRouter>
      <div className="layout-container">
        <div className="layout-left">
          <Route component={EmailList} path="/" />
        </div>

        <div className="layout-right">
          <Route component={EmailDetail} path="/email/:emailId" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
