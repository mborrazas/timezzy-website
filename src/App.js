import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Store from './pages/store';

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
        <Store />
      </header>
    </div>
  );
}

export default App;
