import EmployeesItem from "../EmployeesItem";
import './Employees.css';

function Employees({data}) {
    return (
        <ul className="app-list list-group">
            {
                data.map(item => {
                    return (
                        <EmployeesItem key={item.id} name={item.name} salary={item.salary}/>
                    )
                })
            }
        </ul>
    )
}

export default Employees;