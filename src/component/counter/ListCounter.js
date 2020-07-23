import React,{Fragment} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap";
import {connect} from "react-redux";

class ListCounter extends React.Component{

    render() {
        console.log('render list counter')
        const {counters, dispatch} = this.props
        return (
            <Fragment>
                {counters.map((counter, index)=> {
                    return(
                        <Col sm={2} >
                            <Card className={"shadow"}>
                               <CardHeader  tag={"strong"} >
                                   <Row>
                                       <Col>
                                           <h6 className={"float-left"}>{counter.name} </h6>
                                       </Col>
                                       <Col>
                                           <Button type={"button"} className={"float-right"} onClick={()=>dispatch({type:'DELETE', payload:index})}>X</Button>
                                       </Col>
                                   </Row>
                               </CardHeader>
                                <CardBody>
                                    <h5 className={"text-center"}>{counter.value}</h5>
                                </CardBody>
                                <CardFooter>
                                    <Button type={"button"} className={"float-left"} onClick={()=>dispatch({type:'INCREMENT', payload:index})}>+</Button>
                                    <Button type={"button"} className={"float-right"} onClick={()=>dispatch({type:'DECREMENT',payload:index})}>-</Button>

                                </CardFooter>
                            </Card>
                        </Col>
                    )
                })}
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
return {...state}
}

export default connect(mapStateToProps)(ListCounter);
