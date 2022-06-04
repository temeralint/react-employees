import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import Employees from './components/Employees/Employees';
import AddForm from './components/AddForm/AddForm';
import './App.css';

function App() {
	const employeesData = [
        {
			id: 1,
            name: "Temirlan T.",
            salary: 2000
        },
        {
			id: 2,
            name: "Serzhan K.",
            salary: 3500
        },
		{
			id: 3,
			name: 'Murat G.',
			salary: 4200
		}
    ]

	return (
		<div className="app">
			<AppInfo/>

			<div className="search_wrapper">
				<SearchPanel/>
				<AppFilter/>
			</div>

			<Employees data={employeesData}/>
			<AddForm/>
		</div>
	)
}

export default App;
