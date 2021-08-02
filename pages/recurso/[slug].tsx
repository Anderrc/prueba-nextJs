import {Layout, ContentResource} from "@components";
import { getResource } from "../api/api";

interface IProps {
    // resource: {
    //     titulo: string;
    //     tipo: string[];
    //     url: string;
    //     descripcion: string;
    //     slug: string;
    //     sys: {
    //         id: string;
    //     };
    //     img: {
    //         title: string;
    //         url: string;
    //     };
    //     background: {
    //         title: string;
    //         url: string;
    //     }
    // };
    slug: string
}

const ResourcePage = (props: IProps) => {
    // const { resource } = props;

    return (
        <Layout>
            {/* <ContentResource
                title={resource.titulo}
                img={resource.img.url}
                description={resource.descripcion}
                url={resource.url}
                tipo={resource.tipo}
                id={resource.sys.id}
                slug={resource.slug}
                background={resource.background.url}
            ></ContentResource> */}
            {props.slug}
        </Layout>
    );
};

export async function getServerSideProps(context: any) {
    const resource = await getResource(context.params.slug);
    return {
        props: {
            // resource,
            slug:context.params.slug
        },
    };
}

export default ResourcePage;
