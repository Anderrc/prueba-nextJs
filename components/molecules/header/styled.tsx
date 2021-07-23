import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    height: 100%;
    min-height: 70px;
    background: #0f1926;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContentHeader = styled.div`
    max-width: 1024px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const Logo = styled.div`
    color: white;
    font-size: 20pt;
    font-weight: 700;
`;

interface IPropButtonTheme {
    background?: string;
}

export const ButtonTheme = styled.button<IPropButtonTheme>`
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    border: none;
    outline: none;
    background: ${(props) =>
        props.background === "darkTheme" ? "#fff" : "#000"};
    box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    overflow: hidden;
`;

export const IconTheme = styled.div`
    width: 100%;
    height: 100%;
`;
