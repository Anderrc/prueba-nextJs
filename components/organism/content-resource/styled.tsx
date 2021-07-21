import styled from "styled-components";

interface ICPRProps{
    background?:string
}

export const ContentPageResource = styled.div<ICPRProps>`
    width: 100%;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    background: ${props => props.background};
`;

export const ImgContent = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
    }
`;

export const TitleContent = styled.h1`
    width: 100%;
`;
export const DescriptionContent = styled.p`
    width: 100%;
`;

export const ButtonRedirect = styled.div`
    width: 100%;
    a {
        padding: 10px 20px;
        color: white;
        background: #EF5C3D;
        border-radius: 20px;
        font-weight: 700;
        font-size: larger;
    }
`;

