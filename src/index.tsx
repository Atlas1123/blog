// node_modules
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider } from "@usedapp/core/dist/esm/src/providers";
import { Mainnet, Config, ChainId, Goerli } from "@usedapp/core";
import { getDefaultProvider } from 'ethers';

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./store/auth-context";
import store from "./store";

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
      [Goerli.chainId]: getDefaultProvider('goerli'),
    },
  }

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <ColorModeScript />
                    <ChakraProvider theme={theme}>
                        <DAppProvider config={config}>
                        <App />
                        </DAppProvider>
                    </ChakraProvider>
                </BrowserRouter>
            </Provider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
