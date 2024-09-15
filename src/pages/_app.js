import "@/styles/globals.css";
import Header from "@/components/Header/index.js";  // Import header
import Footer from "@/components/Footer/index.js";  // Import footer

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />     {/* Add header here */}
      <Component {...pageProps} />
      <Footer />     {/* Add footer here */}
    </>
  );
}
