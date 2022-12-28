import axios from 'axios';

const getPhotos = async (categoryId, page) => {
	const category = categoryId ? `category=${categoryId}` : '';
	const requestUrl = `https://63a4d2ad821953d4f2bd752f.mockapi.io/photos_collection?page=${page}&limit=6&${category}`;
	const response = await axios.get(requestUrl);

	return response;
};

export { getPhotos };
