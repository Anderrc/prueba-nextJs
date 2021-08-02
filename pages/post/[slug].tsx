import { getAllSlugs, getResource } from "../api/api";
import { ContentResource, Layout } from "@components";
import { useRouter } from "next/router";
import SEO from "../../components/organism/SEO";

interface IProps {
    resource: {
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
        background: {
            title: string;
            url: string;
        };
        metaData: {
            titulo: string;
            descripcion: string;
            imagen: {
                url: string;
            };
        };
    };
}

const ResourcePage = (props: IProps) => {
    const { resource } = props;

    const router = useRouter();

    if (router.isFallback) return "loading...";

    return (
        <Layout>
            <SEO
                title={resource.metaData.titulo}
                description={resource.metaData.descripcion}
                img={resource.metaData.imagen.url}
            ></SEO>
            <ContentResource
                title={resource.titulo}
                img={resource.img.url}
                description={resource.descripcion}
                url={resource.url}
                tipo={resource.tipo}
                id={resource.sys.id}
                slug={resource.slug}
                background={resource.background.url}
            ></ContentResource>
        </Layout>
    );
};

export async function getStaticPaths() {
    const resources = await getAllSlugs();

    let paths: string[] = [];

    resources.map((item) => paths.push("/post/" + item));

    return {
        paths: paths,
        fallback: true,
    };
}

export async function getStaticProps(context: any) {
    const resource = await getResource(context.params.slug);
    return {
        props: {
            resource,
        },
    };
}

export default ResourcePage;
