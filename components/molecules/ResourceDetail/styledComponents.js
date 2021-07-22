import styled from "styled-components";
import { motion } from "framer-motion";

export const DetailResource = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    z-index: 4;
    padding: 5%;
    /* background: rgba(0,0,0, .5); */
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const BoxDetail = styled(motion.div)`
    background: #fff;
    box-shadow: 1px 2px 8px #888;
    border-radius: 1rem;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 80%;
    width: 80%;
    align-content: flex-start;
    .primary-product-image {
        width: 100%;
        object-fit: cover;
        object-position: center;
        height: 60%;
    }
`;
