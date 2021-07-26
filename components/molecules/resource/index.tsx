import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, CardButton, Ribbon } from "./styledComponents"

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
        recomendado: boolean
    },
    onClick: any,
    layoutId: string,
}

const createSlug = (str: string) => {
    str = str.replace(/\s+/g, "-");
    return str.toLowerCase();
};

export const Resource = (props: IProps) => {
    const {
        data: {
            img,
            titulo,
            descripcion,
            url,
            slug,
            recomendado
        },
        layoutId,
        onClick,
    } = props;

    return (
        <Card 
            onClick={onClick} 
            layoutId={layoutId}
            className={url && 'isUrl'}
        >
            {recomendado && (
                <Ribbon><span>Recomendado</span></Ribbon>
            )}
            <CardImg src={img.url}></CardImg>
            <CardTitle>{titulo}</CardTitle>
            <CardBody>{descripcion}</CardBody>
            {url && (
                <Link
                    passHref
                    href={`/post/[slug]`}
                    as={`/post/${slug}`}
                >
                    <CardButton>Descubre</CardButton>
                </Link>
            )}
        </Card>
    );
};
