import { v4 as uuidv4 } from 'uuid';
import {Component} from 'react';
import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import Employees from './components/Employees/Employees';
import AddForm from './components/AddForm/AddForm';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			employeesData: [
				{
					id: uuidv4(),
					name: "Темирлан Т.",
					salary: 2000,
					isIncrease: false,
					isLiked: true
				},
				{
					id: uuidv4(),
					name: "Сержан К.",
					salary: 3500,
					isIncrease: true,
					isLiked: false
				},
				{
					id: uuidv4(),
					name: 'Торе А.',
					salary: 980,
					isIncrease: false,
					isLiked: false
				}
			],
			searchValue: '',
			filter: 'all'
		}

	}

	changeProp = (id, prop) => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.map(item => item.id === id ? {...item, [prop]: !item[prop]} : item)
		}))
	}

	deleteEmployee = id => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.filter(item => item.id != id)
		}))
	}

	addEmployee = (name, salary) => {
		const checkName = this.state.employeesData.filter(item => item.name == name).length
		checkName !== 0 ? alert('Сотрудник с таким именем уже есть') 
		: 
		this.setState(({employeesData}) => ({
			employeesData: [...employeesData, {
				id: uuidv4(),
				name,
				salary,
				isIncrease: false,
				isLiked: false
			}]
		}))
	}

	updateSearch = searchValue => {
		this.setState({searchValue})
	}

	onEmpSearch = (searchValue, data) => {
		return searchValue.length === 0 ? data : data.filter(item => item.name.includes(searchValue))
	}

	updateFilter = filter => {
		this.setState({filter})
	}

	onEmpFilter = (filter, items) => {
		switch (filter) {
			case 'increase':
				return items.filter(item => item.isIncrease == true)
			case 'salary':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	render() {
		const {employeesData, searchValue, filter} = this.state
		const visibleData = this.onEmpFilter(filter, this.onEmpSearch(searchValue, employeesData))

		return (
			<div className="app">
				<AppInfo data={employeesData}/>
				<div className="search_wrapper">
					<SearchPanel onUpdateSearch={this.updateSearch}/>
					<AppFilter onUpdateFilter={this.updateFilter} activeButton={filter}/>
				</div>

				<Employees 
					data={visibleData}
					changeProp={this.changeProp} 
					deleteEmployee={this.deleteEmployee}
				/>
				<AddForm addEmployee={this.addEmployee}/>
			</div>
		)
	}
}

export default App;
