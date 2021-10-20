import {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Signup from "./pages/auth/Signup";



// const Home = lazy(() => import("./pages/Home"));
//
// const Loading = lazy(() => import("./components/Loading"));

function App() {
    return (
        <Suspense fallback={Loading}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={Signup}/>
            </Switch>
        </Suspense>
    );
}

export default App;
