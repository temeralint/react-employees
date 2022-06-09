import { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    onEmpSearch = e => {
        this.setState({
            searchValue: e.target.value 
        })
        this.props.onEmpSearch(this.state.searchValue)
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.searchValue}
                onChange={this.onEmpSearch}
            />
        )
    }
}

export default SearchPanel;