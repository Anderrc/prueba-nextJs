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
    background: rgba(0,0,0, .5);
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
    .close {
        position: absolute;
        top: 4%;
        left: 2%;
        cursor: pointer;
        height: 30px;
        width: 30px;
        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
            transition: all 0.5s ease;
        }
        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }
`;

export const BoxLeft = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 50%;
    .primary-product-image {
        border-radius: 1rem 0 0 1rem;    
        width: 100%;
        object-fit: cover;
        object-position: center;
        height: 100%;
    }
`;

export const BoxRight = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 50%;
    align-content: flex-start;
    justify-content: center;
    padding: 60px 5% 30px;
    h2 {
        font-size: 30px;
        letter-spacing: .5px;
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }
    p {
        line-height: 1.4;
    }
`;

export const Tag = styled.span`
    padding: 5px 20px;
    margin: 10px;
    background: rgb(0, 173, 181);
    border-radius: 5px 90px 90px 5px;
    font-size: smaller;
    color: white;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &:before {
        background: #fff;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: "";
        height: 6px;
        left: 8px;
        position: absolute;
        width: 6px;
        top: 10px;
    }
`;

export const Ribbon = styled.div`
    position: absolute;
    right: -10px; 
    top: -6px;
    z-index: 1;
    overflow: hidden;
    width: 145px;
    height: 145px;
    text-align: right;
    z-index: 2;
    span {
        font-size: 11px;
        letter-spacing: 0.5px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        line-height: 35px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        width: 155px;
        display: block;
        background: #79A70A;
        background: linear-gradient(#2989d8 0%, #1e5799 100%);
        box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
        position: absolute;
        top: 27px; 
        right: -30px;
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
