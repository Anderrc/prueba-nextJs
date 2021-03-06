import { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { ResourceDetail, Resource, Layout } from "@components";
import { getAllResources } from "./api/api";
import  Container  from "./styledComponents";
import SEO from "../components/organism/SEO";

interface IProps {
    resources: [
        {
            titulo: string;
            tipo: [];
            url: string;
            descripcion: string;
            slug: string;
            sys: {
                id: string;
            };
            img: {
                title: string;
                url: string;
            };
            recomendado: boolean;
        }
    ];
}

const Home = (props: IProps) => {
    const { resources } = props;

    const [isOpenAnimation, setIsOpenAnimation] = useState(false);
    const [selected, setSelected] = useState({
        titulo: "",
        tipo: [],
        url: "",
        descripcion: "",
        slug: "",
        sys: {
            id: ""
        },
        img: {
            title: "",
            url: ""
        },
        recomendado: true
    });

    const resourceSelected = (itemSelected: any) => {
        document.body.style.overflow = "hidden";
        setIsOpenAnimation(true);
        setSelected(itemSelected);
    };

    let title = "Recursos FrontEnds";
    let description ="Son recomendaciones de personales para quien le pueda interezar";
    let img = "/public/faztweb-blog-1.jpg";

    return (
        <Layout>
            <SEO title={title} description={description} img={img}></SEO>
            <Container>
                <AnimateSharedLayout type="crossfade">
                    <AnimatePresence>
                        {resources.map((item) => (
                            <Resource
                                key={item.slug}
                                layoutId={`resource-${item.slug}`}
                                data={item}
                                onClick={() =>
                                    item.url ? null : resourceSelected(item)
                                }
                            />
                        ))}
                    </AnimatePresence>

                    {isOpenAnimation && (
                        <ResourceDetail
                            setIsOpenAnimation={setIsOpenAnimation}
                            setSelected={setSelected}
                            data={selected}
                        />
                    )}
                </AnimateSharedLayout>
            </Container>
        </Layout>
    );
};

export async function getServerSideProps() {
    const resources = await getAllResources();

    return {
        props: {
            resources,
        },
    };
}

export default Home;
