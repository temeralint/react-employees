import {Component} from 'react';
import './AddForm.css';

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

    addEmployee = (e) => {
        e.preventDefault()
        this.props.addEmployee(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
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