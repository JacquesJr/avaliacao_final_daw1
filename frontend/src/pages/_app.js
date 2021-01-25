import Head from 'next/head'
import { useRouter } from 'next/router';

import AppProvider from '../hooks';
import { useAuth } from '../hooks/auth';
import GlobalStyle from '../styles/GlobalStyle';
import { Container } from '../styles/App';

import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const [token, setToken] = useState('');
  const history = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newToken = localStorage.getItem('@IFTMEvents:token');
      if (newToken && !token) {
        setToken(newToken)
      }
      if (!newToken && history.pathname !== '/' && history.pathname !== '/signup') {
        history.push('/')
      }
    }
  }, [history.pathname])

  return (
    <AppProvider>
      <Head>
        <title key="app">IFTM</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Container>
        { !!token && history.pathname !== '/' && history.pathname !== '/signup' && <Navbar/>}
        <Component {...pageProps}/>
      </Container>
    </AppProvider>
  )
}

export default MyApp;
