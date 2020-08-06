export const getData = () => ({
    type: 'GET_DATA',
});

export const getFilteredData = (text) => ({
     type: 'FILTER_DATA', text:text
});

export const getDaysData = (country) => ({
    type: 'GET_DAYS_DATA', country : country
});


