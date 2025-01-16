
import React, {useState} from "react";

function MyComponent(){
    const[name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment,setpayment] = useState("");
    const [shipping,SetShipping] = useState("Delivery")
    
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handlequantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)

    }
    function handlePaymentChange(event){
        setpayment(event.target.value)
    }

    function handleShippingChange(event){
        SetShipping(event.target.value)

    }
    return (
        <div>
            
            <input value={name} onChange={handleNameChange} />
             <p>Name: {name}</p>           
           
           
           <input value={quantity} onChange={handlequantityChange} />
           <p>Name: {quantity}</p>          

           <textarea value={comment} onChange={handleCommentChange}
            placeholder="Enter delivery instructions"/>
            <p>Comment: {comment}</p>
            

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Mpesa">Mpesa</option>
            </select>
            <p>Payment: {payment}</p>  
            
            
            <label htmlFor="">
                <input type="radio" value="Pick Up"
                       checked={shipping === "Pick Up"}
                       onChange={handleShippingChange}
                 />
                 Pick Up
            </label>
            <br/>


            <label htmlFor="">
                <input type="radio" value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={handleShippingChange}
                 />
                 Delivery
            </label>

            <p>Shipping: {shipping}</p>
            

            
            

        </div>
    )
}


export default MyComponent