import React from 'react'
import { buyIceCream } from '../../redux';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
  return (
    <>
        <h2>Ice-Cream Count {props.numberOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy Ice-Cream</button>
    </>
  )
}

const mapStateToprops = state => {
    return {
        numberOfIceCream : state.iceCream.numberOfIceCream
    }
  }
  
  const mapDispatchToProp = dispatch => {
    return {
      buyIceCream : () => dispatch(buyIceCream())
    }
  }
export default connect(mapStateToprops,mapDispatchToProp)(IceCreamContainer);
