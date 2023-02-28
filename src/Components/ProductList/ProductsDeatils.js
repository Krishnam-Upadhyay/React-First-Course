import  React ,{useState} from 'react';
import Button from './Button'



function ProductDetails(props){
  
    let badgeClass = 'badge-margin-left-240 badge ';
    badgeClass+= props.isAvailable  ?'bg-success' : 'bg-danger';

    
    let  [productCount,updateCount]=useState(0);

    function displayFormattedProductCount(){
        return productCount>0?productCount:'zero';
    }

    let incrementProductCount = function(){
      // productCount++;
      // console.log(productCount);
      updateCount(++productCount);
    }
    let decrementProductCount = function(){
      // productCount--;
      // console.log(productCount);
      updateCount(--productCount);
    }

    return (<div className="d-flex align-items-center justify-content-start mt-1">
    <h6 className="font-weight-bold my-2" style={{paddingRight:30}}>{props.price}</h6>
    <Button eventHandler ={decrementProductCount}>-</Button>
    <span style={{padding:'8px 14px',
    fontSize:14}}>{displayFormattedProductCount()}</span>
    <Button eventHandler ={incrementProductCount}>+</Button>
    <span className={badgeClass}>{props.isAvailable ? 'Available' : 'UnAvailable'}</span>
  </div>) 


}
export default ProductDetails;