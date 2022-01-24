import "../styles/globals.css";
import "../styles/font.css";
import { Provider as LyketProvider } from "@lyket/react";

function MyApp({ Component, pageProps }) {
  return (
    <LyketProvider apiKey="pt_4ad886c7d1ca3e56df5b3d83999dbf">
      <Component {...pageProps} />;
    </LyketProvider>
  );
}

export default MyApp;
