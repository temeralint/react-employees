import { v4 as uuidv4 } from 'uuid';
import {Component} from 'react';
import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import Employees from './components/Employees/Employees';
import AddForm from './components/AddForm/AddForm';
import './App.css';

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
					name: "Сержан K.",
					salary: 3500,
					isIncrease: true,
					isLiked: false
				},
				{
					id: uuidv4(),
					name: 'Торе Ж.',
					salary: 4200,
					isIncrease: false,
					isLiked: false
				}
			]
		}
	}

	changeIncrease = id => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.map(item => item.id === id ? {...item, isIncrease: !item.isIncrease} : item)
		}))
	}

	changeIsLiked = id => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.map(item => item.id === id ? {...item, isLiked: !item.isLiked} : item)
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

	render() {
		const {employeesData} = this.state
		
		return (
			<div className="app">
				<AppInfo data={employeesData}/>

				<div className="search_wrapper">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<Employees 
					data={employeesData} 
					changeIncrease={this.changeIncrease} 
					changeIsLiked={this.changeIsLiked} 
					deleteEmployee={this.deleteEmployee}
				/>
				<AddForm addEmployee={this.addEmployee}/>
			</div>
		)
	}
}

export default App;
