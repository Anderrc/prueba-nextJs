import { ContentMain, Main } from "./styled";
import Footer from "../../molecules/footer";
import Header from "../../molecules/header";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../../hooks/context";
import {
    darkTheme,
    GlobalStyles,
    lightTheme,
} from "../../../config/themeConfig";

interface IProps {
    children: React.ReactNode;
}

const Layout = (props: IProps) => {
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
    console.log(theme);
    return (
        <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
            <Header />
            <GlobalStyles />
            <Main>
                <ContentMain>{children}</ContentMain>
            </Main>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
