import styled from "styled-components";

interface ICPRProps {
    background?: string;
}

export const ContentPageResource = styled.div<ICPRProps>`
    width: 100%;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.background};
`;

export const ImgContent = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 30px;
    margin: 30px 0px;
    img {
        width: 100%;
    }
`;

export const TitleContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: xx-large;
    margin-bottom: 0px;
`;

export const ContentTags = styled.div`
    display: flex;
    flex-direction: row;
`

export const Tag = styled.span`
    padding: 5px 20px;
    margin: 10px 10px;
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
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }
`;

export const DescriptionContent = styled.div`
    width: 100%;
    margin: 30px 0px;
    padding: 10px 20px;
    border-radius:20px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    p{
        font-size: larger;
        color: #000;
    }
`;

export const ButtonRedirect = styled.div`
    width: 100%;
    margin-top: 50px auto;
    display: flex;
    justify-content: center;
    a {
        padding: 10px 20px;
        color: white;
        background: #ef5c3d;
        border-radius: 20px;
        font-weight: 700;
        font-size: larger;
    }
`;
