import EmployeesItem from "../EmployeesItem";
import './Employees.css';

function Employees() {
    return (
        <ul className="app-list list-group">
            <EmployeesItem name={'Temirlan'} salary={2000}/>
            <EmployeesItem name={'Serzhan'} salary={3500}/>
            <EmployeesItem name={'Oscar'} salary={4000}/>
        </ul>
    )
}

export default Employees;