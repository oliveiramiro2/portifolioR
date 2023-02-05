import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";

import PortfolioRoutes from "./routes";

import "./style/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ParallaxProvider>
        <BrowserRouter>
            <React.StrictMode>
                <PortfolioRoutes />
            </React.StrictMode>
        </BrowserRouter>
    </ParallaxProvider>
);
