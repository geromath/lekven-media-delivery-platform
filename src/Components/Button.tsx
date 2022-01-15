import React from 'react'

export default function Button( {onClick, children, className} : any ) {
  return (
    <button className={'btn ' + className} onClick={onClick}> {children} </button>
  )
}
