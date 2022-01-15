import React from 'react'
import PropTypes from 'prop-types'

export default function Form({ children, action, className } : any) {
  const classNames = className.split(' ');

  return (
    <form action={action} className={'form ' + classNames.join(' ')}>
      { children }
    </form>
  )
}


