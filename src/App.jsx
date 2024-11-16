import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import NavbarComponent from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actionCreators/authActionCreators";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(getUser());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />

      <Switch>
      <Route exact path={"/"}>
          <NavbarComponent />

          {/* Centered Heading at the Top */}
          <h1
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              fontSize: "2.5rem",
              color: "#374151",
            }}
          >
            Welcome to Cloud Storage System
          </h1>

          {/* Paragraph and Additional Details in the Middle */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              textAlign: "center",
              padding: "0 20px",
              boxSizing: "border-box",
              flexDirection: "column", // Stack elements vertically
            }}
          >
            <p
              style={{
                maxWidth: "600px",
                fontSize: "1.1rem",
                color: "#4b5563",
                lineHeight: "1.6",
                marginBottom: "1.5rem", // Space between paragraph and additional details
                textAlign: "justify", // Justify text alignment
              }}
            >
              This cloud-based file management system allows users to securely
              upload, store, and manage their files online. With user
              authentication and intuitive dashboards, it provides a seamless
              way to organize and share data.
            </p>

            {/* Additional Project Details */}
            <ul
              style={{
                maxWidth: "600px",
                fontSize: "1rem",
                color: "#6b7280",
                lineHeight: "1.5",
                listStyleType: "none", // Remove bullet points
                padding: "0",
                textAlign: "left", // Align list items to the left
              }}
            >
              <li>
                <strong>Features:</strong> Secure file uploads, easy file
                sharing, and real-time updates.
              </li>
              <li>
                <strong>Authentication:</strong> User registration and login for
                personalized access.
              </li>
              <li>
                <strong>Storage:</strong> Unlimited cloud storage for personal
                and business needs.
              </li>
              <li>
                <strong>Security:</strong> Data encryption ensures the safety
                and privacy of your files.
              </li>
              <li>
                <strong>Technology Stack:</strong> React, Firebase, Redux, and
                Tailwind CSS.
              </li>
            </ul>
          </div>
        </Route>
        <Route exact path="/login" component={() => <Login />}></Route>
        <Route exact path="/signup" component={() => <Register />}></Route>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;