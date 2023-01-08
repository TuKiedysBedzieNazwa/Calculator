import React from 'react'
import Head from 'next/head'
import NavBar from '../components/navBar/navBar'

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className='flex justify-center w-full'>
        <h1 className='text-3xl text-white mt-36'>
          jestem indexem ^^
        </h1>
      </main>
    </>
  )
}
