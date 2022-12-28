import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openDrawerAction } from '../../store/actions/openDrawerAction';
import { selectOpenDrawer } from '../../store/selectors/selectOpenDrawer';

import { styled, Drawer, List, Typography } from '@mui/material';
import { Categories } from '../Categories';
import { Box } from '@mui/system';

const SideBar = () => {
	const categories = [
		{ name: 'All' },
		{ name: 'Nature' },
		{ name: 'Holiday' },
		{ name: 'Animals' },
		{ name: 'Architecture' },
		{ name: 'Countries' },
		{ name: 'War' },
	];

	const Text = styled(Typography)({
		color: '#4793ff',
		fontSize: '30px',
		fontWeight: '600',
		letterSpacing: '1px',
		padding: '5px 20px',
		marginBottom: '20px',
	});

	const open = useSelector(selectOpenDrawer);
	const dispatch = useDispatch();

	return (
		<React.Fragment>
			<Drawer
				open={open}
				onClose={() => dispatch(openDrawerAction(false))}
				sx={{ width: '300px', display: 'flex' }}
			>
				<List
					sx={{
						flex: '1',
						height: '100vh',
						width: '300px',
						backgroundColor: '#2e3035',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Text>CATEGORIES</Text>
					{categories.map((category, index) => (
						<Categories name={category.name} key={index} index={index} />
					))}
				</List>
				<Box
					sx={{
						backgroundColor: '#2e3035',
						alignItems: 'center',
						padding: '0 10px',
					}}
				>
					<Typography sx={{ color: 'white', fontSize: '16px' }}>Made by</Typography>
					<Typography
						sx={{
							color: '#4793ff',
							fontSize: '18px',
							fontWeight: '600',
							letterSpacing: '2px',
						}}
					>
						DMYTRO SOLOVYOV
					</Typography>
				</Box>
			</Drawer>
		</React.Fragment>
	);
};

export { SideBar };
