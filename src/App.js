import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Layout from "./components/Layout";



function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/project" component={Project} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;