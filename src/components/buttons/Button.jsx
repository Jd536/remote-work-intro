import React from "react";

function Button({ 
  border,
  color,
  children,
  height,
  // onClick, 
  radius,
  width,
  classname
}){
  return (
    <button  
      className={classname}
    >
      {children}
    </button>
  )
}

export default Button;