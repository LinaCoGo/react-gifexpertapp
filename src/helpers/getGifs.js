
export const getGifs = async ( anime ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(anime)}&limit=10&api_key=gXNP7Nq7zMi9cJvVGrYgIFZ8Q7v1DvrF`;
        const resp = await fetch( url );
        const { data } = await resp.json();
        const gifs = data.map ( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return gifs;
    }
