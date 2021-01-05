import React from "react";
import {buyIceCream} from "../redux/iceCream/iceCreamActions";
import {connect} from "react-redux";

function CakeComponent(props) {
    return (
        <div>
            <h1>
                Number of Ice Creams - {props.numOfIceCream}
            </h1>
            <button onClick={props.buyIceCream}>
                Buy Ice Cream
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
