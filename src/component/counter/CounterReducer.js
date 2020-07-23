import {counter} from "@fortawesome/fontawesome-svg-core";

const initialState = {
   name :"",
    counters:[],

};

function counterReducer(state = initialState, action) {

    const {type, payload} = action;


    switch (type) {

        case 'ADD_COUNTER' :
            return {...state, counters: state.counters.concat([{name: state.name, value : payload}])};
        case  'INCREMENT' :
            return {...state, counters: state.counters.map((counter, index)=>(index===payload ? {...counter, value : counter.value + 1} : counter))};
        case 'DECREMENT' :
            return {...state, counters: state.counters.map((counter, index)=>(index===payload ? {...counter, value : counter.value - 1} : counter))};
        case 'DELETE' :
            return {...state, counters: state.counters.filter((counter, index)=>(index !== payload))};
        case 'INPUT_CHANGE' :
            return {...state, name : payload}
        default :
            return {...state}


                        }
}
export default counterReducer;