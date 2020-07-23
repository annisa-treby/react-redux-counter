import React, {Component, Fragment} from "react";
import counterReducer from "./CounterReducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {Col, Row} from "reactstrap";
import AddCounter from "./AddCounter"
import ListCounter from "./ListCounter"

class CounterContainer extends Component{


    render() {
        console.log('render')
        const counterStore = createStore(counterReducer)
        return (
            <Fragment>
                <Provider store={counterStore}>
                    <Row className={"mb-3"}>
                        <Col sm={{size:4, offset:4}}>
                            <AddCounter/>
                        </Col>
                    </Row>
                    <Row>
                        <ListCounter/>
                    </Row>
                </Provider>
            </Fragment>
        );
    }
}
export default CounterContainer;
