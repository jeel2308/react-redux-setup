import React from "react";
import {connect} from "react-redux";
import {buyCake} from "../redux/cakes/cakeActions";
import {buyIceCream} from "../redux/iceCream/iceCreamActions";

function ItemContainer(props){
    return(
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

function mapStateToProps(state,ownProps){
    const itemState = ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCream;
    return {
        item : itemState
    }
}

function mapDispatchToProps(dispatch,ownProps){
    const dispatchFunction = ownProps.cake?
        ()=>dispatch(buyCake()):
        ()=>dispatch(buyIceCream())

    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);