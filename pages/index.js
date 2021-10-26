import React from 'react'
import App from '../src/App'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>TODO App</title>
        <meta name="description" content="Web site created using create-react-app, migrated to NextJS" />
      </Head>
      <App />
    </>
  )
}

export default index
