import React from 'react'
import './styles.css'




function Pizza(props) {
    return (
        <div className='pizza-container'>
            <div className='inner-container' style={{ width: 400, height: 400 }}>
                <h1>{props.name}</h1>
                <p>Ingredients: {props.ingredients}</p>
                <p>Price: {props.price}</p>
                <img src={props.photoName} alt='pizzaimage' style={{ width: 200, height: 200 }}></img>
                <p>Sold Out: {props.soldOut.toString()}</p>
                {props.soldOut === false ? (
                    <button className='add-to-cart-button'>Add To Cart</button>
                ) : <button className='disabled-button' disabled={true}><del>Add To Cart</del></button>}

            </div>


        </div >
    )
}

export default Pizza;