import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoryId } from '../../store/category/selectors';
import { getPhotos } from '../../services/getPhotos';

import { Container, Grid } from '@mui/material';
import { NavBar } from '../../components/NavBar';
import { SideBar } from '../../components/SideBar';
import { Collection } from '../../components/Collection';
import { PaginationComponent } from '../../components/Pagination';

const MainPage = () => {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [value, setValue] = useState('');

	const filtredPhotos = photos.filter(photo => {
		return photo.name.toLowerCase().includes(value.toLowerCase());
	});

	const categoryId = useSelector(selectCategoryId);

	useEffect(() => {
		setIsLoading(true);
		getPhotos(categoryId, page).then(response => {
			setPhotos(response.data);
			setIsLoading(false);
		});
	}, [categoryId, page]);

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<NavBar value={value} setValue={setValue} />
			<SideBar />
			<Grid
				container
				spacing={2}
				sx={{ marginX: '', marginTop: '10px', flex: 1, maxWidth: '1300px' }}
			>
				{photos.length > 0 &&
					filtredPhotos
						.slice(0, 18)
						.map((obj, index) => (
							<Collection
								name={obj.name}
								images={obj.photos}
								key={index}
								isLoading={isLoading}
							/>
						))}
			</Grid>
			<PaginationComponent page={page} setPage={setPage} />
		</Container>
	);
};

export { MainPage };
