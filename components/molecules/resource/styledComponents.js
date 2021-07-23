import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
    width: 100%;
    background: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    align-self: flex-start;
    justify-self: center;
    cursor: pointer;
    opacity: 1 !important;
    min-height: 430px;
    box-shadow: 1px 1px 12px #777;
    position: relative;
    &.isUrl {
        cursor: default;
    }
`;

export const CardImg = styled.img`
    width: 94%;
    margin: 0 auto 0;
    height: 15rem;
    border-radius: 15px;
    box-shadow: 1px 1px 12px #ccc;
    margin-top: 3%;
`;

export const CardTitle = styled.h2`
    color: #0f1926;
    padding: 0 20px;
    margin: 10px 0px 0;
    text-align: center;
`;

export const CardBody = styled.p`
    width: 100%;
    color: #0f1926;
    padding: 0 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    margin-bottom: 15px;
    margin-top: 10px;
`;

export const CardButton = styled.a`
    color: #f9b208;
    margin: 5px auto 10px;
    cursor: pointer;
    background: #fc5404;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36%;
    padding: 10px 15px;
    color: #fff;
    border-radius: 6px;
    transition: all 0.5s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: bold;
    font-size: 12px;
    &:hover {
        transform: scale(1.1);
    }
`;

export const Ribbon = styled.div`
    position: absolute;
    right: -8px; 
    top: -8px;
    z-index: 1;
    overflow: hidden;
    width: 80px;
    height: 80px;
    text-align: right;
    z-index: 2;
    span {
        font-size: 8px;
        letter-spacing: 0.5px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        line-height: 24px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        width: 104px;
        display: block;
        background: #79A70A;
        background: linear-gradient(#2989d8 0%, #1e5799 100%);
        box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
        position: absolute;
        top: 19px; right: -21px;
        &:before,
        &:after {
            content: "";
            position: absolute; 
            top: 100%;
            z-index: -1;
            border-bottom: 3px solid transparent;
            border-top: 3px solid #1e5799;
        }
        &:before {
            left: 0px; 
            border-left: 3px solid #1e5799;
            border-right: 3px solid transparent;
        }
        &:after {
            right: 0px; 
            border-left: 3px solid transparent;
            border-right: 3px solid #1e5799;
        }
    }
`;
