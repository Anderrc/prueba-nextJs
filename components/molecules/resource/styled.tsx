import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    align-self: center;
    justify-self: center;
`;
export const CardImg = styled.img`
    width: 100%;
    height: 15rem;
`;

export const CardBody = styled.p`
    width: 100%;
    color: #0f1926;
    padding: 0 10px;
`;

export const CardTitle = styled.h2`
    color: #0f1926;
    padding: 0 10px;
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
