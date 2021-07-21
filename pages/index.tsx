import Resource from "../components/molecules/resource";
import Layout from "../components/organism/layout";
import { getAllResources } from "./api/api";
import Container from "./styles";

interface IProps {
    resources: [
        {
            titulo: string
            tipo:string
            url:string
            descripcion: string
            slug:string
            sys: {
                id: string
            }
            img :{
              title:string
              url:string
            }
        }
    ];
}

const Home = (props: IProps) => {
    const { resources } = props;

    return (
        <Layout>
            <Container>
                {resources.map((item, key) => (
                    <Resource
                        title={item.titulo}
                        img={item.img.url}
                        description={item.descripcion}
                        url={item.url}
                        type={item.tipo}
                        key={key}
                        id={item.sys.id}
                        slug={item.slug}
                    ></Resource>
                ))}
            </Container>
        </Layout>
    );
};

export async function getServerSideProps() {
    const resources = await getAllResources();

    return {
        props: {
            resources
        },
    };
}

export default Home;
