const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [ ...state, {firstName: action.user.firstName, id: action.user.id} ];

       
    default:
      return state;
  }
};

export default rootReducer;