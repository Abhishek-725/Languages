import React, { useState } from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../../redux/index';

function NewCakeContainer(props) {
  // console.log(props);  
  const [numberOfCakeToBuy,setNumberOfCakeToBuy] = useState(1);
  return (
    <>
      <h2>Cake Count {props.numberOfCakes}</h2>
      <input type='text' value={numberOfCakeToBuy} onChange={(e) => setNumberOfCakeToBuy(e.target.value)}></input>
      <button onClick={() => props.buyCake(numberOfCakeToBuy)}>Buy {numberOfCakeToBuy} Cake</button>
    </>
  )
}

const mapStateToprops = state => {
  return {
    numberOfCakes : state.cake.numberOfCakes
  }
}

const mapDispatchToProp = dispatch => {
  return {
    buyCake : (numberOfCakeToBuyValue) => dispatch(buyCake(numberOfCakeToBuyValue))
  }
}
export default connect(mapStateToprops,mapDispatchToProp)(NewCakeContainer);