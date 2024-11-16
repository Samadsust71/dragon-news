import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div id="error-page" className='flex flex-col justify-center items-center gap-3 min-h-screen font-poppins'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error?.status}</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to={'/'} className="btn btn-accent">Go back home</Link>
    </div>
  )
}

export default ErrorPage
