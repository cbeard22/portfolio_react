import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
    </Switch>
)

export default Main;