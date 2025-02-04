import {BUY_CAKE} from './cakeTypes';
 
export const buyCake = (numberOfCakeToBuy = 1) => {
    return {
        type : BUY_CAKE,
        payload : numberOfCakeToBuy
    }
}