import { Component } from 'react';
import './AppFilter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allEmpActive: true,
            increaseActive: false,
            salaryActive: false
        }
    }

    // changeActive = () => {
    //     this.setState(state => [...state, {
    //         value: !this.state[value]
    //     }])
    // }

    render() {
        return (
            <div className='btn-group'>
                <button 
                    className='btn btn-light' 
                    onClick={this.props.showAll} 
                    // data-active='allEmpActive'
                >
                    Все сотрудники
                </button>
                <button
                    className='btn btn-outline-light' 
                    onClick={this.props.showIncrease} 
                    // data-active='increaseActive'
                >
                    На повышение
                </button>
                <button 
                    className='btn btn-outline-light' 
                    onClick={this.props.filterSalary} 
                    // data-active='salaryActive'
                >
                    З/п больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;