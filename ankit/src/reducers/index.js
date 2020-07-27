const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_DATA':
           return { ...state, loading: true };
      case 'COUNTRY_DATA':
           return { ...state, country_data: action.json.Countries,global_data:action.json.Global, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;