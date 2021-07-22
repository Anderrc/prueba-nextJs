import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
    width: 100%;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    align-self: center;
    justify-self: center;
    cursor: pointer;
    opacity: 1 !important;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 15rem;
`;

export const CardTitle = styled.h2`
    color: #0f1926;
    padding: 0 20px;
    margin-bottom: 0;
`;

export const CardBody = styled.p`
    width: 100%;
    color: #0f1926;
    padding: 0 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    margin-bottom: 30px;
`;

export const CardButton = styled.a`
    font-size: x-large;
    color: #f9b208;
    margin: 5px 10px;
    cursor: pointer;
    &:active {
        color: #f98404;
    }
    &:hover {
        color: #fc5404;
    }
`;
