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
import Image from 'next/image'
interface IProps {
    title: string;
    description: string;
    type: [];
    url: string;
    img: string;
    background: string;
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
                <Image width="1024" height="500" quality="100" src={props.background} alt={props.title} layout="intrinsic" />
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
