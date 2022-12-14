import { Component } from "react";
import "./emp-add-form.css";

class EmpAddForm extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            name: "",
            salary: "",
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.title]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState = ({
            name: "",
            salary: "",
        })
    }



    
    render () {

        const {name, salary} = this.state;

        return (
            <div 
                className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        required
                        minLength="2"
                        title="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input 
                        type="number" 
                        className="form-control new-post-label" 
                        placeholder="З/П в $$$?"
                        required
                        title="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button 
                        type="submit" 
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmpAddForm;