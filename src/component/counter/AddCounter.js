import React, {Fragment} from "react";
import {Button, Col, Input, Row} from "reactstrap";
import {connect} from "react-redux";

class AddCounter extends React.Component{


    render(){
        console.log('render add counter')
        const {dispatch}=this.props;
        console.log(dispatch)
        return(
            <Fragment>
                <Row>
                    <Col>
                        <Input type={"text"} onChange={(event)=>dispatch({type:'INPUT_CHANGE', payload: event.target.value})} placeholder={"name card"}/>
                    </Col>
                    <Col>
                        <Button block onClick={()=>dispatch({type:'ADD_COUNTER', payload:1})}>Add Counter</Button>

                    </Col>
                </Row>
            </Fragment>
        )
    }
}
function mapStateToProps(state) {
return {...state}
}

export default connect(mapStateToProps)(AddCounter);
