import './css/App.css';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Home from './views/Home';

function App() {
    return (
        <div>
            <Router>
                <Route path="/" component={Home}></Route>
            </Router>
        </div>
    );
}
export default App;
