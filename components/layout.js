import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import styles from './styles/global.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Layout = props => (
  <Fragment>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:300,400,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Gothic+A1:300,400,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.1.0/css/line-awesome.min.css"
      />
    </Head>
    <div id={cx('wrap')} className={cx(`${props.theme}`, `${props.color}`)}>
      <Sidebar theme="bg-dark" />
      <Header />
      <main className={cx('main')}>
        {props.children}
        <Footer />
      </main>
    </div>
  </Fragment>
)

export default Layout
