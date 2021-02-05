import styles from "../styles/Layout.module.css";

import Nav from "./Nav";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
