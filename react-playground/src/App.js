import "./css/App.css";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Hooks from './demos/Hooks';
import Home from './demos/Home';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import {
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse
} from "shards-react";
import { useState } from "react";
function App() {
    const [collapseOpen, setCollapseOpen] = useState(false);
    const toggleNavbar = () => {
        setCollapseOpen(!collapseOpen);
    }

    return <div>
        <Router>
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="/">React Playground</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse open={collapseOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#/">
                                HOME
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/hooks">
                                HOOKS
                            </NavLink>
                        </NavItem>
                    </Nav>


                </Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/hooks">
                        {Hooks}
                    </Route>
                    <Route path="/">
                        {Home}
                    </Route>
                </Switch>

            </Container>
        </Router>
    </div>

}

export default App;
