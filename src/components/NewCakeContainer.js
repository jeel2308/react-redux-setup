import React,{useState} from "react";
import {buyCake} from "../redux/cakes/cakeActions";
import {connect} from "react-redux";

function NewCakeComponent(props) {

    const [number,setNumber] = useState(1);

    return (
        <div>
            <h1>
                Number of cakes - {props.numOfCakes}
            </h1>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>props.buyCake(number)}>
                Buy { number } cake
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeComponent);
