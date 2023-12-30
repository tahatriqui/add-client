import "./App.css";
import Compo1 from "./Compo1";
import Compo2 from "./Compo2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./Store"
function App() {
  return (
    <div className="container">
      <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Compo1 /> } />
            <Route path="/Articles" element={ <Compo2 /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
