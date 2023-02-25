import React from 'react'

export default function Product(props) {
  return (
    <div 
      className=' w-[200px] h-[500px] ' 
      style={{
        boxSizing: "border-box",
        width: 200,
        height: 315,
        background: "#4f4f4f",
        padding: 0,
        borderRadius: 20,
        overflow: "hidden"
      }}  
    >
      <img 
        src={props.details.url} 
        style={{
          boxSizing: "border-box",
          width: 200,
          height: 200,
          borderRadius: 20
        }}
      />
      <p 
        className=' font-bold '
        style={{
          boxSizing: "border-box",
          marginLeft: 15
        }}
      >{props.details.desc}</p>
      <button
        style={{
          boxSizing: "border-box",
          marginLeft: 15,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 20,
          border: "none",
          width: 170,
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >Buy ₹{props.details.price}</button>
    </div>
  )
}
