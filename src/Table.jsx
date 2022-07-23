import React, { Component } from 'react';
import "./App.css";
import NavBar from './NavBar';

export default class Table extends Component
{
        state = {
        Stuff:[
            {id:1,name:"Jeans", price:2000,qty:0, company:"Spykar",total:0},
            {id:2,name:"Shirt", price:1000,qty:0, company:"Levis",total:0},
            {id:3,name:"Shoes", price:1500,qty:0, company:"Nike",total:0},
            {id:4,name:"Slippers", price:500,qty:0, company:"Sparks",total:0},
            // {id:5,name:"Shocks", price:200,qty:0, company:"Action",total:0}
            ],
        }
    Incrementcart = (cart) => {
        cart.qty = cart.qty + 1;
        cart.total = cart.qty * cart.price;
        this.setState({ Stuff: this.state.Stuff });
      };
    Decreasecart = (cart) => {
    if (cart.qty > 0) {
      cart.qty = cart.qty - 1;
      cart.total = cart.qty * cart.price;
      this.setState({ Stuff: this.state.Stuff });
    }
    this.setState({ Stuff: this.state.Stuff });};  
    
     msgError=()=>{alert("Server Error! Please Try again");}

    render(){ console.log(this.props)
    return (<><NavBar/>
    <div ><b><h2>Successfully Loged In! </h2><pre>   </pre>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Brand Name</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Add</th>
                <th scope="col">Remove</th>
                <th scope="col">Total Price</th>
            </tr><pre> </pre>
        </thead>
            <tbody>
            {this.state.Stuff.map((cart) => {
                return (
                    <tr>
                      <td>{cart.company}</td>
                      <td>{cart.name}</td>
                      <td>Rs. {cart.price}</td>
                      <td>{cart.qty}</td>
                      <td><button onClick={() => this.Incrementcart(cart)}>+</button></td>
                      <td><button onClick={() => this.Decreasecart(cart)}>-</button></td>
                      <td>{cart.total}</td>          
                  </tr>
                 );
              })}
            </tbody>
          </table>
          <h4>Your Total Cart Value : Rs. {this.state.Stuff.reduce((total, cart) => total + cart.qty * cart.price,0)}</h4>
          <pre> </pre>
          <button onClick={this.msgError}>Proceed to Payment</button></b>
    </div></>)
    }
}