const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_DATA':
           return { ...state, loading: true };
      case 'COUNTRY_DATA':
           return { ...state, news: action.json.Countries, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;