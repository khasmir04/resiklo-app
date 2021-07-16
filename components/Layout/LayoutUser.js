import Head from "next/head";

import HeaderUser from "../HeaderUser";
import Footer from "../Footer";

const LayoutHome = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderUser />
      {children}
      <Footer />
    </>
  );
};

export default LayoutHome;
