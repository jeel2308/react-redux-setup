import {BUY_CAKE} from "./actionTypes";

export const buyCake = (number = 1)=>({
   type : BUY_CAKE,
   payload: number
});

