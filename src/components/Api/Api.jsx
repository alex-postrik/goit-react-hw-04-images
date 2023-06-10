import axios from 'axios';

export const api = async (value, page=1) => {

        const searchParams = new URLSearchParams({
            "key": "34871467-f144c0dca622e0cd08d0dd1ad",
            "q": value,
            "image_type": 'photo',
            "orientation": 'horizontal',
            "safesearch": true,
            "per_page": 12,
            'page': page,
        })

        const url = `https://pixabay.com/api/?${searchParams}`;

        return await axios.get(url).then(response => {
            return response.data;
        })
        .catch(error => {
            throw new Error(error);
        })

     }
