import React from 'react'
import './pizza.css'




function Pizza(props) {
    return (
        <div className='pizza-container'>
            <div className='inner-container'>
                <h1>{props.name}</h1>
                <p>Ingredients: {props.ingredients}</p>
                <p>Price: {props.price}</p>
                <img src={props.photoName} alt='pizzaimage'></img>
                <p>Sold Out: {props.soldOut.toString()}</p>
            </div>


        </div>
    )
}

export default Pizza;