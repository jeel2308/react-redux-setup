import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux/cakes/cakeActions";

function HooksCakeContainer(){

    const numOfCakes = useSelector((state)=>state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Num of Cakes - {numOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

export default HooksCakeContainer;