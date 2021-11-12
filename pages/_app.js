import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}