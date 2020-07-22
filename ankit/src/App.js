import React from 'react';
import Button from './containers/Button';
import NewsItem from './containers/DataItem'
import Loading from './containers/Loading'
let App = () => (
  <div>
     <Button />
     <Loading />
     <DataItem />
  </div>
);
export default App;