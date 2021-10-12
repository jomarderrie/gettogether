import {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Loading from "./components/Loading";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import {GlobalsStyle} from "./styled/GlobalStyle";

const NavBar = lazy(() => import("./components/navbar/HomeNavBar"))
const Home = lazy(() => import("./pages/Home"));

// const Loading = lazy(() => import("./components/Loading"));

function App() {
    return (
        <Suspense fallback={Loading}>
            <GlobalsStyle/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </Suspense>
    );
}

export default App;
