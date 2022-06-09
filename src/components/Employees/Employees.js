import EmployeesItem from "../EmployeesItem";
import './Employees.css';

function Employees({changeProp, deleteEmployee, ...obj}) {
    const {data} = obj
    return (
        <ul className="app-list list-group">
            {
                data.map((item, index) => {
                    return (
                        <EmployeesItem 
                            key={index}
                            id={item.id} 
                            name={item.name} 
                            salary={item.salary} 
                            isIncrease={item.isIncrease} 
                            isLiked={item.isLiked}
                            changeProp={changeProp}
                            deleteEmployee={deleteEmployee}
                        />
                    )
                })
            }
        </ul>
    )
}

export default Employees;