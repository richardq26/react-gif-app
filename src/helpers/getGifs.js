import axios from 'axios';
export const getGifs = async (category) => {
    const url =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=IUV7OjqJZU0DVM4AEQWv6CIp13TxZBzX`;
    const resp = await (await axios.get(url)).data.data;

    const gifs = resp.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  };