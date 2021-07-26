import Head from 'next/head';

interface IProps{

    title:string;
    description: string
    img: string

}

const SEO = (props: IProps) => {

    const { title, description, img } = props;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content=" http://www.example.com/" />
            <meta property="og:image" content={img} />
            <meta
                property="og:description"
                content={description}
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@publisher_handle" />
            <meta name="twitter:title" content={title} />
            <meta
                name="twitter:description"
                content={description}
            />
            <meta name="twitter:creator" content="@author_handle" />

            <meta name="twitter:image" content={img} />

            <meta property="og:title" content={title} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content=" http://www.example.com/" />
            <meta property="og:image" content={img} />
            <meta
                property="og:description"
                content={description}
            />
        </Head>
    );
};

export default SEO;
