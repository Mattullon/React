

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=nSLwecMt4Np68Y2SyOzmSZhZrRdynUzF&q=${category}&limit=5`;

    const resp = await fetch(url)

    const {data = []}= await resp.json();

    const gifs= data.map(({id,title}) =>({
        id: id,
        title:title,
        url: img.images.downsized_medium.url,

    }))
    //console.log(gifs);
    return gifs
}