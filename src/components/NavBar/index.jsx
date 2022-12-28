import { useDispatch } from 'react-redux';
import { openDrawerAction } from '../../store/actions/openDrawerAction';

import { styled, AppBar, Toolbar, Box, Typography, TextField } from '@mui/material';
import Menu from '../../assets/img/menu.png';

const StyledToolBar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: '#2e3035',
	borderRadius: '0 0 20px 20px',
});

const StyledTypography = styled(Typography)({
	color: '#4793ff',
	fontWeight: '600',
	fontSize: '20px',
	letterSpacing: '1px',
});

const StyledBox = styled(Box)({
	display: 'flex',
	padding: '0 20px 0 0',
	alignItems: 'center',
	justifyContent: 'center',
});

const NavBar = ({ value, setValue }) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(openDrawerAction(true));
	};

	return (
		<AppBar
			position="sticky"
			sx={{ borderRadius: '0 0 20px 20px', backgroundColor: '#2e3035' }}
		>
			<StyledToolBar>
				<Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
					<StyledBox onClick={() => handleClick()}>
						<img src={Menu} alt="menu" width={30} height={30} />
					</StyledBox>
					<StyledTypography
						variant="h6"
						sx={{
							display: { xs: 'none', md: 'block' },
						}}
					>
						PHOTOS COLLECTION
					</StyledTypography>
				</Box>
				<Box
					component="form"
					sx={{
						width: '30ch',
						'& .MuiTextField-root': {
							m: 1,
						},
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="outlined-flexible"
						label="Search..."
						sx={{
							borderRadius: '20px',

							'& .MuiInputBase-root': {
								color: 'white',
								fontWeight: '600',
								letterSpacing: '2px',
							},
							'& fieldset': {
								border: '2px solid #4793ff',
							},
							'& label': {
								color: '#4793ff',
								fontWeight: '600',
								letterSpacing: '2px',
							},
							'& label.Mui-focused': {
								color: '#4793ff',
								fontWeight: '600',
							},
							'& .MuiOutlinedInput-root': {
								'&:hover fieldset': {
									border: '2px solid #4793ff',
								},
							},
						}}
						size="small"
						color="primary"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</Box>
			</StyledToolBar>
		</AppBar>
	);
};

export { NavBar };
