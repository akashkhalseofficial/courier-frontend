import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  Navbar
} from "adminlte-2-react";
import Dashboard from "./dashboard/dashboard";
import Parcel from "./parcel/parcel";
import Track from "./track/track";
import NewParcel from "./parcel/new_parcel";
import ViewParcel from "./parcel/view_parcel";
import UpdateParcel from "./parcel/update_parcel";
import Login from "./login/login";
import Contact from "./components/Contact";
import About from "./components/About";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const { Item, Header, UserPanel, Searchbar } = Sidebar;

function App() {

  const isSignedIn = cookies.get('userLoggedIn') === 'true' ? true : false

  const sidebar = [
    <Item key="dashboard" text="Dashboard" to="/" icon="far-folder" />,
    <Item key="parcel" text="New Parcel" to="/new_parcel" icon="far-folder" />,
    <Item key="parcel" text="All Parcels" to="/parcels" icon="far-folder" />,
    <Item key="track" text="Track Parcel" to="/track" icon="far-folder" />,
    // <Item key="track" text="Contact Us" to="/contact-us" icon="far-folder" />,
    // <Item key="track" text="About Us" to="/about-us" icon="far-folder" />
  ];

  const userPanel = [

  ]

  return (

    isSignedIn ? (
      <>
        <AdminLTE
          title={["Courier ", "Management"]}
          titleShort={["CR", "M"]}
          theme="blue"
          sidebar={sidebar}
          >
            <Navbar.Core>
              <li style={{ "margin" : "15px;"}} onClick={(e) => {
                          e.preventDefault();
                          document.cookie = "userLoggedIn=false;";
                          window.location.href = "/login";
                        }}>Sign Out</li>
            </Navbar.Core>
            <Dashboard exact path="/" />
            <Parcel exact path="/parcels" />
            <Track exact path="/track" />
            <NewParcel exact path="/new_parcel" />
            <ViewParcel exact path="/parcel/:id" />
            <UpdateParcel exact path="/parcel/update/:id" />
            <Login exact path="/login"/>
            <Contact exact path="/contact-us" />
            <About exact path="/about-us" />
        </AdminLTE>
      </>
    ) : 
    <Login exact path="/login" />

  );
}

export default App;
