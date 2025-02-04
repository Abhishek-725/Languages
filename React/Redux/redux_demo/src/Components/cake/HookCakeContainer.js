import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../../redux';

function HookCakeContainer(props) {
    const numberOfCakes = useSelector( state => state.cake.numberOfCakes);
    const dispatch = useDispatch();
  return (
    <>
        <h2>Cake Count {numberOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  )
}

export default HookCakeContainer