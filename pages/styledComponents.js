import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    width: 100%;
    padding: 30px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
    gap: 30px;
    justify-content: center;  
`;