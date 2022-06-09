import {Component} from 'react';
import './AddForm.scss';

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addEmployee = e => {
        e.preventDefault()
        const numbers = this.state.name.replace(/\s/g, '').split('').filter(item => isNaN(+item) ? null : item)
        if (numbers.length !== 0) {
            alert('Имя не может содержать цифры')
        } else if (this.state.name.length <= 3) {
            alert('Введите имя, состоящее больше чем из трех символов')
        } else if (this.state.salary.length == 0) {
            alert('Введите зарплату сотрудника')
        } else {
            this.props.addEmployee(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.addEmployee}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}
                        onChange={this.onInputChange}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onInputChange}
                    />
    
                    <button 
                        type="submit" 
                        className="btn btn-outline-light" 
                    >
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default AddForm;