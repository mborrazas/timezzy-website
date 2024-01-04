import { useState } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Store from './pages/store';
import { BookingContext } from "./context/bookingContext";
import { SELECT_HOURS } from "./pages/store/components/PopupBook/stepsBooking";
import Reviews from "./pages/reviews";
import CancelBooking from "./pages/cancelBooking";


const router = createBrowserRouter([
  {
    path: "/store/123",
    element: <Store />
  },
]);

function App() {


  const [servicesSelected, setServicesSelected] = useState([]);
  const [showPopupBook, setShowPopupBook] = useState(false);
  const [stepPopupBook, setStepPopupBook] = useState(SELECT_HOURS);



  return (
    <BookingContext.Provider value={{ servicesSelected, setServicesSelected, showPopupBook, setShowPopupBook, stepPopupBook, setStepPopupBook }}>
      <div className="App">
        <header className="App-header">
          <Store />
        </header>
      </div>
    </BookingContext.Provider>
  );
}

export default App;
