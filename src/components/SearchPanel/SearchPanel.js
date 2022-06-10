import { Component } from 'react';
import './SearchPanel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    onEmpSearch = e => {
        const searchValue = e.target.value
        this.setState({searchValue})
        this.props.onEmpSearch(searchValue, this.props.data)
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