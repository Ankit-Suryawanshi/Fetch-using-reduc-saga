import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd';
import './index.css'

const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
  },
  {
    title: 'Country Code',
    dataIndex: 'CountryCode',
  },
  {
    title: 'New Confirmed',
    dataIndex: 'NewConfirmed',
  },
  {
    title: 'New Deaths',
    dataIndex: 'NewDeaths',
  },
  {
    title: 'New Recovered',
    dataIndex: 'NewRecovered',
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'TotalConfirmed',
  },
  {
    title: 'Total Deaths',
    dataIndex: 'TotalDeaths',
  },
  {
    title: 'Total Recovered',
    dataIndex: 'TotalRecovered',
  },
];


export default function DataItem({article, global}) {  

  return (
    <div>
      <h4>Country Wise Status : </h4>
      <Table columns={columns} dataSource={article} size="middle" />
    </div>
  );
  
}

const mapStateToProps = (state) => ({
article: state.country_data,
global: state.global_data,
})

DataItem = connect(mapStateToProps,null)(DataItem)
//export default DataItem;