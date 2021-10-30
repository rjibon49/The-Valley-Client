import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Booking from "./Components/Booking/Booking";
import AddService from "./Components/DashBoard/AddService";
import DashBoard from "./Components/DashBoard/DashBoard";
import DestinationDetails from "./Components/Destinations/DestinationDetails";
import Destinations from "./Components/Destinations/Destinations";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import Signup from "./Components/Signup/Signup";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
            <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/home">
                  <Home></Home>
                </Route>
                <Route exact path="/about">
                  <About></About>
                </Route>
                <Route exact path="/destinations">
                  <Destinations></Destinations>
                </Route>
                <Route exact path="/destinations/:destinationId">
                  <DestinationDetails></DestinationDetails>
                </Route>
                <Route exact path="/booking">
                  <Booking></Booking>
                </Route>
                <Route exact path="/dashboard">
                  <DashBoard></DashBoard>
                </Route>
                <Route exact path="/addservice">
                  <AddService></AddService>
                </Route>
                <Route exact path="/signup">
                  <Signup></Signup>
                </Route>
            </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
