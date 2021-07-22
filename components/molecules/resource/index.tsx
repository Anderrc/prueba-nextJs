import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, CardButton } from "./styledComponents"

interface IProps {
    data: {
        titulo: string;
        descripcion: string;
        tipo: string;
        url: string;
        img: {
            url: string
        }
        id?: string
        slug: string
    },
    onClick: any,
    layoutId: string
}

const createSlug = (str:string) => {
    str = str.replace(/\s+/g, '-');
    return str.toLowerCase();
}

const Resource = (props: IProps) => {
    const {
        data: {
            img,
            titulo,
            descripcion,
            url,
            slug,
        },
        layoutId,
        onClick,
    } = props;

    return (
        <Card 
            onClick={onClick} 
            layoutId={layoutId}
        >
            <CardImg src={img.url}></CardImg>
            <CardTitle>{titulo}</CardTitle>
            <CardBody>{descripcion}</CardBody>
            {url && (
                <Link
                    passHref
                    href={`/post/[slug]`}
                    as={`/post/${slug}`}
                >
                    <CardButton>Ver</CardButton>
                </Link>
            )}
        </Card>
    );
};

export default Resource;
