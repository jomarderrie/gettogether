import {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Loading from "./components/Loading";

import {GlobalsStyle} from "./styled/GlobalStyle";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const HomeDashboard = lazy(() => import("./pages/HomeDashboard/HomeDashboard"))
// const Loading = lazy(() => import("./components/Loading"));

function App() {
    return (
        <Suspense fallback={Loading}>
            <GlobalsStyle/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/home" component={HomeDashboard}/>
            </Switch>
        </Suspense>
    );
}

export default App;
