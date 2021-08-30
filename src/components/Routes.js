import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Avatar from "./cssComponents/Avatar";
import Home from "./Home";
import Alert from './cssComponents/Alert';
import Badge from './cssComponents/Badge';
import Button from './cssComponents/Button';
import Card from './cssComponents/Card';
import Form from './cssComponents/Form';
import Image from './cssComponents/Image';
import Modal from './cssComponents/Modal';
import Navbar from './cssComponents/Navbar';
import Rating from './cssComponents/Rating';
import Slider from './cssComponents/Slider';
import Toast from './cssComponents/Toast';
import TextUtilities from './cssComponents/TextUtilities';
import SimplifiedGrid from './cssComponents/SimplifiedGrid';
import List from './cssComponents/List';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/avatar" exact component={Avatar} />
        <Route path="/alert" exact component={Alert} />
        <Route path="/badge" exact component={Badge} />
        <Route path="/button" exact component={Button} />
        <Route path="/card" exact component={Card} />
        <Route path="/simplifiedgrid" exact component={SimplifiedGrid} />
        <Route path="/image" exact component={Image} />
        <Route path="/form" exact component={Form} />
        <Route path="/list" exact component={List} />
        <Route path="/modal" exact component={Modal} />
        <Route path="/navbar" exact component={Navbar} />
        <Route path="/rating" exact component={Rating} />
        <Route path="/slider" exact component={Slider} />
        <Route path="/toast" exact component={Toast} />
        <Route path="/textutilities" exact component={TextUtilities} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
