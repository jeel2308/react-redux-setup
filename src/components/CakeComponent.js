import React from "react";
import {buyCake} from "../redux/cakes/cakeActions";
import {connect} from "react-redux";

function CakeComponent(props) {
    return (
        <div>
            <h1>
                Number of cakes - {props.numOfCakes}
            </h1>
            <button onClick={props.buyCake}>
                Buy cake
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
