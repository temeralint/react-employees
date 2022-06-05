import EmployeesItem from "../EmployeesItem";
import './Employees.css';

function Employees({changeIncrease, changeIsLiked, deleteEmployee, ...obj}) {
    const {data} = obj
    return (
        <ul className="app-list list-group">
            {
                data.map(item => {
                    return (
                        <EmployeesItem 
                            key={item.id} 
                            name={item.name} 
                            salary={item.salary} 
                            isIncrease={item.isIncrease} 
                            isLiked={item.isLiked}
                            changeIncrease={changeIncrease}
                            changeIsLiked={changeIsLiked}
                            deleteEmployee={deleteEmployee}
                        />
                    )
                })
            }
        </ul>
    )
}

export default Employees;