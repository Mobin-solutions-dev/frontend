import { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import AppContext from "../context/AppContext";

import { API_URL } from '../utils/api/api-url'

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    // grab token value from cookie
    const token = Cookie.get("token");
    if (token) {
      // authenticate the token on the server and place set user object
      fetch(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          setUser(null)
          return null;
        }
        const user = await res.json();
        setUser(user)
      });
    }

  }, [])



  return (
    <AppContext.Provider value={{
      user: user, isAuthenticated: !!user, setUser: setUser
    }}>
      <Fragment>
        <Head>
          <title>Mob'In Solutions</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen" />

        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    </AppContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
