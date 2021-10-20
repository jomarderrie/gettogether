import {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Loading from "./components/Loading";

import {GlobalsStyle} from "./styled/GlobalStyle";

const Home = lazy(() => import("./pages/Home"));

// const Loading = lazy(() => import("./components/Loading"));

function App() {
    return (
        <Suspense fallback={Loading}>
            <GlobalsStyle/>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </Suspense>
    );
}

export default App;
