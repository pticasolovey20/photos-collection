const initialState = {
	open: false,
};

export const drawerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'open/setOpen':
			return { ...state, open: (state.open = action.payload) };

		default:
			return state;
	}
};
