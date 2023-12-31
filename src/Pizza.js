import React from 'react'
import './styles.css'




function Pizza(props) {
    return (
        <div className='pizza-container'>
            <div className='inner-container' style={{ width: 400, height: 300 }}>
                <h1>{props.name}</h1>
                <p>Ingredients: {props.ingredients}</p>
                <p> {props.soldOut === false ? "Price :" + props.price + "$" : null}</p>
                <img src={props.photoName} alt='pizzaimage' style={{ width: 200, height: 200 }}
                    className={`pizza-image ${props.soldOut === true ? 'fade' : ""} `}></img>
                <p>Sold Out: {props.soldOut.toString()}</p>
                {props.soldOut === false ? (
                    <button className='add-to-cart-button'>Add To Cart</button>
                ) : <button className='disabled-button' disabled={true}><del>Add To Cart</del></button>}

                {/* {console.log(props)} */}
            </div>
        </div >
    )
}

export default Pizza;