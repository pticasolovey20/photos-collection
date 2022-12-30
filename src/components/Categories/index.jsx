import { useDispatch } from 'react-redux';
import { setCategoryIdAction } from '../../store/category/actions';

import { styled, ListItem, ListItemButton, Typography } from '@mui/material';

const Text = styled(Typography)({
	color: 'white',
	fontSize: '20px',
	letterSpacing: '2px',
	'&:hover': {
		color: '#4793ff',
	},
});

const Categories = ({ name, index }) => {
	const dispatch = useDispatch();

	return (
		<ListItem
			disablePadding
			sx={{
				padding: '10px',
				width: '100%',
			}}
		>
			<ListItemButton onClick={() => dispatch(setCategoryIdAction(index))}>
				<Text>{name.toUpperCase()}</Text>
			</ListItemButton>
		</ListItem>
	);
};

export { Categories };
