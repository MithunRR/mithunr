import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact-page'>
        <div className="contact-heading">
            <h1>Contact Page</h1>
            <Link to="/">Home</Link>
        </div>
        <div className="contact-form">
            <p>Please send mail on the given mail at the bottom of the page</p>
        </div>
    </div>
  )
}

export default Contact
