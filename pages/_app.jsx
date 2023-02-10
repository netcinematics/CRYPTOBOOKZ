import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
const activeChainId = ChainId.Mainnet;
function MyApp({ Component, pageProps }) {
  return (<ThirdwebProvider desiredChainId={activeChainId}>
    <Component {...pageProps} />
    </ThirdwebProvider>);
}

export default MyApp
