import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../../redux/index';

function CakeContainer(props) {
  console.log(props);  
  return (
    <>
      <h2>Cake Count {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  )
}

const mapStateToprops = state => {
  return {
    numberOfCakes : state.numberOfCakes
  }
}

const mapDispatchToProp = dispatch => {
  return {
    buyCake : () => dispatch(buyCake())
  }
}
export default connect(mapStateToprops,mapDispatchToProp)(CakeContainer);