import { useEffect, useState } from 'react';
import {
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Collapse,
} from 'shards-react';
import { Switch, Route, NavLink } from 'react-router-dom';
import useTest from "../hooks/useTest";
import Child from "./Child";
export default function Home() {
    const [collapseOpen, setCollapseOpen] = useState(false);
    const toggleNavbar = () => {
        setCollapseOpen(!collapseOpen);
    };
    const { a, changeA, showA } = useTest();
    useEffect(()=>{
        alert('showA change');
    },[showA]);
    return (
        <>
            <button
                onClick={() => {
                    changeA(a + 1);
                }}
            >
                a+1
            </button>
            <button onClick={showA}>显示</button>
            <Child clickHandle={showA}></Child>
            {/* <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="/">React Playground</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse open={collapseOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                }}
                                exact
                                to="/"
                            >
                                HOME
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                }}
                                to="/hooks"
                            >
                                HOOKS
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/hooks">{Hooks}</Route>
                    <Route path="/">{Home}</Route>
                </Switch>
            </Container> */}
        </>
    );
}
