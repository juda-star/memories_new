import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
      <Router>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
           
            <Route path="/" exact  element={<Home />} />

            <Route path="/posts/search" exact  element={<Home />} />
            <Route path="/posts/:id"   element={<PostDetails />} />
          <Route path="/auth" exact element={ <Auth />} />

          </Routes>
        </Container>
      </Router>
  );
};

export default App;
