import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, CardButton } from "./styled";

interface IProps {
    title: string;
    description: string;
    type: string;
    url: string;
    img: string;
    id: string
    slug: string
}

const createSlug = (str:string) => {
    str = str.replace(/\s+/g, '-');
    return str.toLowerCase();
}

const Resource = (props: IProps) => {
    return (
        <Card>
            <CardImg src={props.img}></CardImg>
            <CardTitle>{props.title}</CardTitle>
            <CardBody>{props.description}</CardBody>
            <Link passHref href={`/recurso/[slug]`} as={`/recurso/${props.slug}`}>
                <CardButton>Ver</CardButton>
            </Link>
        </Card>
    );
};

export default Resource;
