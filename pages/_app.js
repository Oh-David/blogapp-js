import "../configureAmplify";
import "../styles/globals.css";
import Navbar from "./components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      Hi
      <Navbar />
      <div className="py-8 px-16 bg-slage-100">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
