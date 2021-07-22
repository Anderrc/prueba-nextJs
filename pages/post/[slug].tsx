import Layout from "../../components/organism/layout";
import { getAllSlugs, getResource } from "../api/api";
import ContentResource from "../../components/organism/content-resource";
import { useRouter } from "next/router";

interface IProps {
    resource: {
        titulo: string;
        tipo: string;
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
    };
}

interface IResources {
    items: [
        {
            titulo: string;
            tipo: string;
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
        }
    ];
}

const ResourcePage = (props: IProps) => {
    const { resource } = props;

    const router = useRouter();

    if (router.isFallback) return "loading...";

    return (
        <Layout>
            <ContentResource
                title={resource.titulo}
                img={resource.img.url}
                description={resource.descripcion}
                url={resource.url}
                type={resource.tipo}
                id={resource.sys.id}
                slug={resource.slug}
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