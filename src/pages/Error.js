import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
        <h1>ERROR 404</h1>
        <p>Page was not found. <Link to="/">Click here</Link></p>
    </>
  )
}

export default Error