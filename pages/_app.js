import App from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: "Source Sans Pro", "Open Sans", Roboto, "San Francisco", Helvetica, Arial, sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    dark: '#333333',
    light: '#cccccc',
    white: '#ffffff',
    green: '#43853d'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
