import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import Employees from './components/Employees/Employees';
import AddForm from './components/AddForm/AddForm';
import './App.css';

function App() {
	return (
		<div className="app">
			<AppInfo/>

			<div className="search_wrapper">
				<SearchPanel/>
				<AppFilter/>
			</div>

			<Employees/>
			<AddForm/>
		</div>
	)
}

export default App;
