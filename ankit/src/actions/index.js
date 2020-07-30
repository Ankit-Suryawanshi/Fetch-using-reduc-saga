const getData = () => ({
    type: 'GET_DATA',
});

export const getFilteredData = (text) => ({
     type: 'FILTER_DATA', text:text
})

export default getData;
