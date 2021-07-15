import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";


const LayoutHome = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutHome;
