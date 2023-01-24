import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route/Routes";

function App() {
  return (
    <div className="App">
      {/* <button className="btn btn-outline">Button</button>
      <button className="btn btn-outline btn-primary">Button</button>
      <button className="btn btn-outline btn-secondary">Button</button>
      <button className="btn btn-outline btn-accent">Button</button> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
