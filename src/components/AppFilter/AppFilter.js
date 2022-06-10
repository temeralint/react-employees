import { Component } from 'react';
import './AppFilter.scss';

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allEmpActive: true,
            increaseActive: false,
            salaryActive: false
        }
    }

    render() {
        return (
            <div className='btn-group'>
                <button 
                    className='btn btn-light' 
                    onClick={this.props.showAll} 
                >
                    Все сотрудники
                </button>
                <button
                    className='btn btn-outline-light' 
                    onClick={this.props.showIncrease} 
                >
                    На повышение
                </button>
                <button 
                    className='btn btn-outline-light' 
                    onClick={this.props.filterSalary} 
                >
                    З/п больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;