const initialState = {
	categoryId: 0,
};

export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'categoryId/setCategoryId':
			return { ...state, categoryId: (state.categoryId = action.payload) };

		default:
			return state;
	}
};
