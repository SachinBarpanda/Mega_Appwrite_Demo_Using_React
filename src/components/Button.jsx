import React, { Children } from 'react'

function Button({
    children,
    type = "button",
    bgColor = 'bg-blue-600',
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={` px-4 py-2 rounded-md ${bgColor} ${textColor} ${className}  ${type}`} {...props}>
        { children}
    </button>
  )
}

export default Button