import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/store/123",
    element: <Store />
  },
]); 

function App() {
  return (
    <div className="App">
      <header className="App-header">
         
      </header>
    </div>
  );
}

export default App;
