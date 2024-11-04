import "@/styles/globals.css";
import Header from "@/components/Header/index.jsx";  // Import header
import Footer from "@/components/Footer/index.jsx";  // Import footer

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />     {/* Add header here */}
      <Component {...pageProps} />
      <Footer />     {/* Add footer here */}
    </>
  );
}
