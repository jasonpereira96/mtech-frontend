import React from 'react';
import './App.css';
import DataGrid from './components/DataGrid';
import Header from './components/Header';

const columns = [
	{ name: 'id', title: 'ID' },
	{ name: 'name', title: 'Name' },
	{ name: 'branch', title: 'Branch' },
	{ name: 'cgpa', title: 'CGPA' },
	{ name: 'address', title: 'Address' },
	{ name: 'phone', title: 'Phone' },
	{ name: 'degree', title: 'Degree' },
	{ name: 'year', title: 'Year' }
];
const rows = [
	{
	  "id": 1,
	  "name": "Anisha Desai",
	  "branch": "Electronics",
	  "cgpa": 9.8,
	  "address": "Borivali",
	  "degree": "MTECH",
	  "phone": "1234568563",
	  "year": "2021"
	},
	{
	  "id": 2,
	  "name": "Daniel D’Silva",
	  "branch": "Electronics",
	  "cgpa": 8.8,
	  "address": "Andheri",
	  "degree": "MTECH",
	  "phone": "45612382550",
	  "year": "2021"
	},
	{
	  "id": 3,
	  "name": "Prajna Kotian",
	  "branch": "Electronics",
	  "cgpa": 8.8,
	  "address": "Andheri",
	  "degree": "MTECH",
	  "phone": "45612382550",
	  "year": "2021"
	},
	{
	  "id": 4,
	  "name": "Sagnik Mukherjee",
	  "branch": "Electronics",
	  "cgpa": 8.8,
	  "address": "Andheri",
	  "degree": "MTECH",
	  "phone": "45612382550",
	  "year": "2021"
	},
	{
	  "id": 5,
	  "name": "Surya Prakash",
	  "branch": "Electronics",
	  "cgpa": 8.8,
	  "address": "Andheri",
	  "degree": "MTECH",
	  "phone": "45612382550",
	  "year": "2021"
	},
	{
	  "id": 6,
	  "name": "Sahil Shelar",
	  "branch": "Electronics",
	  "cgpa": 8.8,
	  "address": "Andheri",
	  "degree": "MTECH",
	  "phone": "45612382550",
	  "year": "2021"
	},
	{
	  "id": 7,
	  "name": "Vishal Ramane",
	  "branch": "Electronics",
	  "cgpa": 8.8,
	  "address": "Andheri",
	  "degree": "MTECH",
	  "phone": "45612382550",
	  "year": "2021"
	},
	{
	  "id": 8,
	  "name": "Dayanand Ambawade",
	  "branch": "Electronics",
	  "cgpa": 10,
	  "address": "Andheri",
	  "degree": "MTECH",
	  "phone": "45612382550",
	  "year": "2021"
  }
  ]
  


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hostname: 'localhost:3001'
		};
	}
	render() {
		return (
			<div className='App'>
				<Header onHostnameChanged={this.onHostnameChanged.bind(this)} hostname={this.state.hostname}></Header>
				<DataGrid rows={rows} columns={columns} serverHostname={this.state.hostname}></DataGrid>
			</div>
		);
	}
	onHostnameChanged(hostname) {
		this.setState({
			hostname: hostname
		});
	}
}

export default App;
