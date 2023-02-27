import Button from './Button'

let productCount = 0;

let isAvailable = 'Available';
function displayFormattedProductCount(){
    return productCount>0?productCount:'zero';
}

function ProductDetails(props){
    let badgeClass = 'badge-margin-left-240 badge ';
    badgeClass+= props.isAvailable  ?'bg-success' : 'bg-danger';
    return (<div className="d-flex align-items-center justify-content-start mt-1">
    <h6 className="font-weight-bold my-2" style={{'margine-right':300}}>{props.price}</h6>
    <Button>-</Button>
    <span style={{padding:'8px 14px',
    fontSize:14}}>{displayFormattedProductCount()}</span>
    <Button>+</Button>
    <span className={badgeClass}>{props.isAvailable ? 'Available' : 'UnAvailable'}</span>
  </div>)
}
export default ProductDetails;