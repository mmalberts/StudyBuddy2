const rootReducer = (state = [], action) => {
  	switch (action.type) {
    	case "ADD_USER":
      		return [ ...state, {firstName: action.user.firstName, lastName: action.user.lastName, id: action.user.id}];
    	default:
      		return state;
  	}
};

export default rootReducer;