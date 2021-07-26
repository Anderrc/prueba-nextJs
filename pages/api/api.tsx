async function fetchGraphQL(query: string, preview = false) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
                    preview
                        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                        : process.env.CONTENTFUL_ACCESS_TOKEN
                }`,
            },
            body: JSON.stringify({ query }),
        }
    ).then((response) => response.json());
}
function extractPages(fetchResponse: {
    data: { paginasCollection: { items: object } };
}) {
    return fetchResponse?.data?.paginasCollection?.items;
}

function extractPage(fetchResponse: {
    data: { paginasCollection: { items: any } };
}) {
    return fetchResponse?.data?.paginasCollection?.items?.[0];
}

const extractSlugs = (fetchResponse: {
    data: { paginasCollection: { items: [{slug:string}] } };
}):string[] => {
    let data = fetchResponse?.data?.paginasCollection?.items;
    let paths:string[]= [];

    data.map(item => paths.push(item.slug))
    return paths;
};
export const getAllResources = async () => {
    const entry = await fetchGraphQL(
        `query {
            paginasCollection{
                total
                items{
                  titulo
                  tipo
                  url
                  slug
                  descripcion
                  recomendado
                  img{
                    title
                    url
                  }
                  sys{
                    id
                  }
                }
              }
        }`,
        true
    );
    return extractPages(entry);
};

export const getResource = async (slug: string) => {
    const entry = await fetchGraphQL(
        `query {
            paginasCollection(where:{slug: "${slug}"}, limit:1){
                items{
                    titulo
                    tipo
                    url
                    descripcion
                    slug
                    background{
                        title
                        url
                    }
                    recomendado
                    img{
                        title
                        url
                    }
                    sys{
                        id
                    }
                    metaData{
                        titulo
                        descripcion
                        imagen{
                            url
                        }
                    }
                }   
            }           
        }`,
        true
    );
    return extractPage(entry);
};

export const getAllSlugs = async () => {
    const entry = await fetchGraphQL(
        `query {
            paginasCollection{
                items{
                    slug
                }
            }
        }`,
        true
    );
    return extractSlugs(entry);
};
