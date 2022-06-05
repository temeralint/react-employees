import './EmployeesItem.css';

function EmployeesItem({name, salary, isIncrease, isLiked, changeIncrease, changeIsLiked, deleteEmployee}) {
    let classNames = "list-group-item d-flex justify-content-between"
    if (isIncrease) {
        classNames += " increase"
    }

    if (isLiked) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={() => changeIsLiked(name)}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={() => changeIncrease(name)}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={() => deleteEmployee(name)}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesItem;