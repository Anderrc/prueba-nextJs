import Layout from "../../components/organism/layout";
import { getResource } from "../api/api";
import ContentResource from "../../components/organism/content-resource";

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

const ResourcePage = (props: IProps) => {
    const { resource } = props;

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

export async function getServerSideProps(context: any) {
    const resource = await getResource(context.params.slug);
    return {
        props: {
            resource,
        },
    };
}

export default ResourcePage;
