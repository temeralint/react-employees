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
					id: 1,
					name: "Темирлан Т.",
					salary: 2000,
					isIncrease: false,
					isLiked: true
				},
				{
					id: 2,
					name: "Сержан K.",
					salary: 3500,
					isIncrease: true,
					isLiked: false
				},
				{
					id: 3,
					name: 'Торе Ж.',
					salary: 4200,
					isIncrease: false,
					isLiked: false
				}
			]
		}
	}

	changeIncrease = name => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.map(item => item.name === name ? {...item, isIncrease: !item.isIncrease} : item)
		}))
	}

	changeIsLiked = name => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.map(item => item.name === name ? {...item, isLiked: !item.isLiked} : item)
		}))
	}

	deleteEmployee = name => {
		this.setState(({employeesData}) => ({
			employeesData: employeesData.filter(item => item.name != name)
		}))
	}

	render() {
		return (
			<div className="app">
				<AppInfo/>

				<div className="search_wrapper">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<Employees 
					data={this.state.employeesData} 
					changeIncrease={this.changeIncrease} 
					changeIsLiked={this.changeIsLiked} 
					deleteEmployee={this.deleteEmployee}
				/>
				<AddForm/>
			</div>
		)
	}
}

export default App;
