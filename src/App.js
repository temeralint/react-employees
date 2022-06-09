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
					salary: 500,
					isIncrease: false,
					isLiked: false
				}
			],
			searchValue: 'Т'
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

	onEmpSearch = searchValue => {
		console.log(searchValue)
		this.setState(({employeesData}) => ({
			employeesData: employeesData.filter(item => {
				if (item.name.includes(searchValue)) {
					return item
				}
			})
		}))
	}

	filterSalary = () => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.filter(item => item.salary > 1000)
		}))
	}

	showAll = () => {
		this.setState({
			employeesData: this.empDataCopy
		})
	}

	showIncrease = () => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.filter(item => item.isIncrease == true)
		}))
	}

	render() {
		const {employeesData} = this.state
		
		return (
			<div className="app">
				<AppInfo data={employeesData}/>

				<div className="search_wrapper">
					<SearchPanel onEmpSearch={this.onEmpSearch}/>
					<AppFilter
						filterSalary={this.filterSalary}
						showAll={this.showAll}
						showIncrease={this.showIncrease}
					/>
				</div>

				<Employees 
					data={employeesData}
					changeProp={this.changeProp} 
					deleteEmployee={this.deleteEmployee}
				/>
				<AddForm addEmployee={this.addEmployee}/>
			</div>
		)
	}
}

export default App;
