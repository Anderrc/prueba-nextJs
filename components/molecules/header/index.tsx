import {
    ButtonTheme,
    ContentHeader,
    HeaderStyled,
    Logo,
    IconTheme,
} from "./styled";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../../hooks/context";

export const Header = () => {
    const { theme, setTheme } = useContext(AppContext);

    const handlerButtonTheme = () => {
        if (theme == "lightTheme") {
            setTheme("darkTheme");
            localStorage.setItem("theme", "darkTheme");
        } else {
            setTheme("lightTheme");
            localStorage.setItem("theme", "lightTheme");
        }
    };

    return (
        <HeaderStyled>
            <ContentHeader>
                <Logo>
                    <Link href="/">
                        <a>Index</a>
                    </Link>
                </Logo>
                <ButtonTheme onClick={handlerButtonTheme} background={theme}>
                    <IconTheme
                        initial="y:-25"
                        animate={
                            theme === "darkTheme"
                                ? {
                                        y: 19,
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        },
                                    }
                                : {
                                        y: -25,
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        },
                                    }
                        }
                    >
                        <svg
                            className="icon sun"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line
                                x1="4.22"
                                y1="4.22"
                                x2="5.64"
                                y2="5.64"
                            ></line>
                            <line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                            ></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line
                                x1="4.22"
                                y1="19.78"
                                x2="5.64"
                                y2="18.36"
                            ></line>
                            <line
                                x1="18.36"
                                y1="5.64"
                                x2="19.78"
                                y2="4.22"
                            ></line>
                        </svg>
                    </IconTheme>
                    <IconTheme
                        as={motion.div}
                        initial="y:25"
                        animate={
                            theme === "lightTheme"
                                ? {
                                      y: -15,
                                      transition: {
                                          duration: 0.3,
                                          ease: "easeInOut",
                                      },
                                  }
                                : {
                                      y: 25,
                                      transition: {
                                          duration: 0.3,
                                          ease: "easeInOut",
                                      },
                                  }
                        }
                    >
                        <svg
                            className="icon moon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </IconTheme>
                </ButtonTheme>
            </ContentHeader>
        </HeaderStyled>
    );
};
