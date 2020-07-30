import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd';
import './index.css'
import {  Breadcrumb, Input} from 'antd';
import { getFilteredData } from '../actions/index'
const { Search } = Input;


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
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
  },
  {
    title: 'New Deaths',
    dataIndex: 'NewDeaths',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.NewDeaths - b.NewDeaths,
  },
  {
    title: 'New Recovered',
    dataIndex: 'NewRecovered',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.NewRecovered - b.NewRecovered,
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'TotalConfirmed',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
  },
  {
    title: 'Total Deaths',
    dataIndex: 'TotalDeaths',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
  },
  {
    title: 'Total Recovered',
    dataIndex: 'TotalRecovered',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
  },
];


export default class DataItem extends React.Component {

onSearchChange = (event)=> {
  console.log('in search change'+event);
  this.props.getFilteredData(event)
}

  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Search
              placeholder="Enter Your country name here :"
              onSearch={value => this.onSearchChange(value)}
              style={{ width: 500 }}
            />
        </Breadcrumb>
        <br></br>
        <h4>Country Wise Status : </h4>
        <Table columns={columns} dataSource={this.props.article} size="middle" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	article: state.country_data,
})

const mapDispatchToProps = {
	getFilteredData: getFilteredData,
};

DataItem = connect(mapStateToProps,mapDispatchToProps)(DataItem)