import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Booking from "./Components/Booking/Booking";
import AddService from "./Components/DashBoard/AddService";
import AllBooking from "./Components/DashBoard/AllBooking";
import AllService from "./Components/DashBoard/AllService";
import DashBoard from "./Components/DashBoard/DashBoard";
import DestinationDetails from "./Components/Destinations/DestinationDetails";
import Destinations from "./Components/Destinations/Destinations";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound";
import PrivetRout from "./Components/PrivetRoute/PrivetRoute";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import Signup from "./Components/Signup/Signup";
import MyBooking from "./Components/User/MyBooking";
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
                <PrivetRout exact path="/booking">
                  <Booking></Booking>
                </PrivetRout>
                <PrivetRout exact path="/dashboard">
                  <DashBoard></DashBoard>
                </PrivetRout>
                <PrivetRout exact path="/addservice">
                  <AddService></AddService>
                </PrivetRout>
                <PrivetRout exact path="/allservice">
                  <AllService></AllService>
                </PrivetRout>
                <PrivetRout exact path="/allbooking">
                  <AllBooking></AllBooking>
                </PrivetRout>
                <PrivetRout exact path="/mybooking">
                  <MyBooking></MyBooking>
                </PrivetRout>
                <Route exact path="/signup">
                  <Signup></Signup>
                </Route>
                <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
