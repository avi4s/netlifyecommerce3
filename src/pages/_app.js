import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
