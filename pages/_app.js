import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import "../styles/globals.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider>
    <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>

    // </Provider>
  );
}

export default MyApp;
