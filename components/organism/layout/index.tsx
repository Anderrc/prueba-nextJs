import { ContentMain, Main, ProgressIcon } from "./styled";
import { Header } from "@components";
import { ThemeProvider } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../hooks/context";
import {
    darkTheme,
    GlobalStyles,
    lightTheme,
} from "../../../config/themeConfig";
import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion";

interface IProps {
    children: React.ReactNode;
}

export const Layout = (props: IProps) => {
    const { children } = props;

    const { theme, setTheme } = useContext(AppContext);

    if (typeof window !== "undefined") {
        if (localStorage.getItem("theme") !== null) {
            setTheme(localStorage.getItem("theme"));
        } else {
            localStorage.setItem("theme", "lightTheme");
            setTheme("lightTheme");
        }
    }

    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

    return (
        <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
            <Header />
            <GlobalStyles />
            <Main>
                <ContentMain>{children}</ContentMain>
            </Main>
            <ProgressIcon className="progress-icon" viewBox="0 0 60 60">
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke={theme === "lightTheme" ? "black" : "white"}
                    strokeDasharray="0 1"
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1, // Reverse direction of line animation
                    }}
                />
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke={theme === "lightTheme" ? "black" : "white"}
                    d="M14,26 L 22,33 L 35,16"
                    initial={false}
                    strokeDasharray="0 1"
                    animate={{ pathLength: isComplete ? 1 : 0 }}
                />
            </ProgressIcon>
            {/* <Footer /> */}
        </ThemeProvider>
    );
};
