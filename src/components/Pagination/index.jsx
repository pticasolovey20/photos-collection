import { Pagination, Stack, PaginationItem } from '@mui/material';

const PaginationComponent = ({ page, setPage }) => {
	return (
		<Stack>
			<Pagination
				count={3}
				page={page}
				onChange={(_, number) => setPage(number)}
				shape="rounded"
				variant="outlined"
				sx={{ marginX: 'auto', paddingY: '20px' }}
				renderItem={item => (
					<PaginationItem
						shape="rounded"
						variant="outlined"
						component={'div'}
						{...item}
						color={'primary'}
						sx={{
							width: '50px',
							height: '50px',
							color: 'white',
							fontSize: '18px',
							borderRadius: '15px',
							backgroundColor: '#2e3035',
							transition: '0.3s ease-in-out',
							'&.Mui-selected': {
								backgroundColor: '#4793ff',
								color: 'white',
							},
							'&.Mui-selected:hover': {
								backgroundColor: '#4793ff',
							},
							'&:hover': {
								backgroundColor: '#4793ff',
								transform: 'translateY(-5px)',
							},
						}}
					/>
				)}
			/>
		</Stack>
	);
};

export { PaginationComponent };
