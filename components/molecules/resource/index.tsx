import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, CardButton } from "./styled";

interface IProps {
    title: string;
    description: string;
    type: string;
    url: string;
    img: string;
    id: string;
    slug: string;
    delay: number;
}

const createSlug = (str: string) => {
    str = str.replace(/\s+/g, "-");
    return str.toLowerCase();
};

const Resource = (props: IProps) => {
    return (
        <Card
            as={motion.div}
            initial={{
                x:props.delay * 100,
                opacity: 0    
            }}
            animate={{
                x: 10,
                opacity:1,
                transition: {
                    delay:props.delay,
                    duration: 3,
                    ease: "easeInOut",
                },
            }}
        >
            <CardImg src={props.img}></CardImg>
            <CardTitle>{props.title}</CardTitle>
            <CardBody>{props.description}</CardBody>
            <Link
                passHref
                href={`/recurso/[slug]`}
                as={`/recurso/${props.slug}`}
            >
                <CardButton>Ver</CardButton>
            </Link>
        </Card>
    );
};

export default Resource;
