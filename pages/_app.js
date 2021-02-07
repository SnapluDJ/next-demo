import { Provider } from "react-redux";

import "../styles/globals.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </Provider>
  );
}

export default MyApp;
