import React from "react";
import { Route, Switch } from 'react-router-dom'
import Header from "./Component/Header/Header";
import About from "./Container/About/About";
import Product from "./Container/Product/Product";
import Home from "./Container/Home/Home";
import Service from "./Container/Service/Service";
import Gallery from "./Container/Gallery/Gallery";
import Contact from "./Container/Contact/Contact";
import Footer from "/Component/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Product"} component={Product} />
        <Route exact path={"/Service"} component={Service} />
        <Route exact path={"/Gallery"} component={Gallery} />
        <Route exact path={"/Contact"} component={Contact} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
