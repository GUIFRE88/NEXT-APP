import React from 'react'
import Head from 'next/head'

import Coala from '../assets/coala.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Coala />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Guilherme Freudenburg.</p>
    </Container>
  )
}

export default Home
