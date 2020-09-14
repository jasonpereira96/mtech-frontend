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
const rows = [];


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
				<Header onHostnameChanged={this.onHostnameChanged.bind(this)}></Header>
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
