/* eslint-disable @next/next/no-img-element */
import {
    ButtonRedirect,
    ContentPageResource,
    ContentTags,
    DescriptionContent,
    ImgContent,
    Tag,
    Title,
    TitleContent,
} from "./styled";

interface IProps {
    title: string;
    description: string;
    type: [];
    url: string;
    img: string;
    id: string;
    slug: string;
}

const ContentResource = (props: IProps) => {
    return (
        <ContentPageResource>
            <TitleContent>
                <Title>{props.title}</Title>
                <ContentTags>
                    {props.type.map((item, key) => (
                        <Tag key={key}>{item}</Tag>
                    ))}
                </ContentTags>
            </TitleContent>
            <ImgContent>
                <img src={props.img} alt={props.title} />
            </ImgContent>
            <DescriptionContent>
                <p>{props.description}</p>
            </DescriptionContent>
            <ButtonRedirect>
                <a href={props.url} target="_blank" rel="noreferrer">
                    Ir al sito
                </a>
            </ButtonRedirect>
        </ContentPageResource>
    );
};

export default ContentResource;
