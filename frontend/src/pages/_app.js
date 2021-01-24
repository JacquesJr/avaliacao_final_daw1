import Head from 'next/head'

import GlobalStyle from '../styles/GlobalStyle';
import { Container } from '../styles/App';

import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title key="app">IFTM</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Container>
<<<<<<< HEAD
        <Navbar/>
=======
        { false && <Navbar/>}
>>>>>>> b85bc1f949fc11d2c3634e228731576edeec2222
        <Component {...pageProps}/>
      </Container>
    </>
  )
}

export default MyApp;
