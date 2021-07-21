/* eslint-disable @next/next/no-img-element */
import {
    ButtonRedirect,
    ContentPageResource,
    DescriptionContent,
    ImgContent,
    TitleContent,
} from "./styled";



interface IProps {
    title: string;
    description: string;
    type: string;
    url: string;
    img: string;
    id: string;
    slug: string;
}

const ContentResource = (props: IProps) => {
    return (
        <ContentPageResource background="red">
            <ImgContent >
                <img src={props.img} alt={props.title} />
            </ImgContent>
            <TitleContent>
                {props.title} - {props.type}
            </TitleContent>
            <DescriptionContent>{props.description}</DescriptionContent>
            <ButtonRedirect>
                <a href={props.url} target="_blank" rel="noreferrer">
                    Ir al sito
                </a>
            </ButtonRedirect>

        </ContentPageResource>
    );
};

export default ContentResource;
