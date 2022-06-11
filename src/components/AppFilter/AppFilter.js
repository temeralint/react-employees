import './AppFilter.scss';

function AppFilter({onUpdateFilter, activeButton}) {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: 'salary', label: 'З/п больше 1000$'}
    ]

    const buttons = buttonsData.map((item, index) => {
        const btnStyle = item.name === activeButton ? 'btn btn-light' : 'btn btn-outline-light'
        return (
            <button 
                className={btnStyle} 
                key={index}
                onClick={() => onUpdateFilter(item.name)}
            >
                {item.label}
            </button>
        )
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;