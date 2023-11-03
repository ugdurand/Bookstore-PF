import React from 'react'


export default function CartWidget(props) {
  return (
    <div>
      <ul>
        <li><i className="material-icons">shopping_cart </i> </li>
        <li>{props.cantidad}</li>
      </ul>
    </div>
  )
}
