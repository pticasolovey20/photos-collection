import { styled, Grid, Card, Typography, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Collection = ({ name, images }) => {
	const StyledMedia = styled(CardMedia)({
		width: '31%',
		borderRadius: '20px',
		height: '80px',
	});

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Link to={`/collection/${name}`}>
				<Card
					sx={{
						borderRadius: '30px',
						padding: '20px 20px 0 20px',
						backgroundColor: '#2e3035',
						transition: ' all 0.15s ease-in-out',
						':hover': {
							h4: {
								color: '#4793ff',
							},
							transform: 'translateY(-5px)',
						},
					}}
				>
					<Typography
						variant="h4"
						sx={{
							color: '#fff',
							fontSize: '20px',
							letterSpacing: '2px',
							textAlign: 'center',
							maxHeight: '50px',
							alignItems: 'center',
							marginBottom: '15px',
						}}
					>
						{name.toUpperCase()}
					</Typography>
					<CardMedia
						component={'img'}
						height="250px"
						image={images[0]}
						alt="Item"
						sx={{
							borderRadius: '20px',
							marginBottom: '15px',
							objectFit: 'cover',
						}}
					/>
					<CardContent
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '0px',
						}}
					>
						<StyledMedia component={'img'} image={images[1]} alt="Item" />
						<StyledMedia component={'img'} height="80px" image={images[2]} alt="Item" />
						<StyledMedia component={'img'} image={images[3]} alt="Item" />
					</CardContent>
				</Card>
			</Link>
		</Grid>
	);
};

export { Collection };
