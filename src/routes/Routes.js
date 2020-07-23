import React from "react";
import CounterContainer from "../component/counter/CounterContainer";
import {Route, Switch} from "react-router-dom";

function Routes() {
return(
    <Switch>
            <Route path="/" render={()=><CounterContainer/>}/>
    </Switch>

)
}
export default Routes;