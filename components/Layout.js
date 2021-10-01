import React from 'react'
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material'
import Head from 'next/head'
import useStyles from '../utils/styles'
import NextLink from 'next/link'
export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>Gents Bay</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <NextLink href='/' passHref>
            <Link>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href='/cart' passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href='/login' passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Gents Bay</Typography>
      </footer>
    </>
  )
}
