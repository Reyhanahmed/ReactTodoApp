
export var searchTextReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
};

export var showCompletedReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default: 
			return state;
	}
}

export var addTodoReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				action.todo
			];
		case 'UPDATE_TODO':
			return state.map(todo => {
				if(todo.id === action.id){
					return {
						...todo,
						...action.updates
					}
				} else {
					return todo;
				}
			});
		case 'LOGOUT':
			return [];
		case 'ADD_TODOS':
			return [
				...state,
				...action.todos
			];
		default:
			return state;
	}
}

export var fetchingReducer = (state = false, action) => {
	switch(action.type){
		case 'FETCH_TODOS':
			return !state;
		default:
			return state;
	}
}

export var authReducer = (state = {}, action) => {
	switch(action.type){
		case 'LOGIN':
			return {
		 		'uid': action.uid
		 	};
		case 'LOGOUT':
			return {};
		default:
			return state;
	}
}