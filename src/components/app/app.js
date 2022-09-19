import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmpList from "../emp-list/emp-list";
import EmpAddForm from "../emp-add-form/emp-add-form";
import nextId from "react-id-generator";

import "./app.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Lev", salary: 55, cookie: false, liked: false, id:1},
                {name: "Alexandr", salary: 777, cookie: false, liked: false, id:2},
                {name: "Irina", salary: 6666, cookie: false, liked: false, id:3},
            ],
            term: "",
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        })
    }

    addItem = (name, salary) => {

        const newItem = {
            name: name.trim(),
            salary,
            cookie: false,
            liked: false,
            id: nextId(),
        }
        
        this.setState(({data}) => {
            const newArr = [ ...data, newItem];
            return {
                data: newArr,
            } 
        })
    }

    onToggleCookie = (id) => {
        
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, cookie: !item.cookie}
                }
                return item;
            })
        }))
    }

    onToggleLike = (id) => {

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, liked: !item.liked}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0)
            return items;

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })

    }

    onUpdSearch = (term) => {
        this.setState({term});
    }

    render () {

        const {data, term} = this.state;
        const emp = this.state.data.length;
        const cookies = this.state.data.filter(item => item.cookie === true).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo 
                emp={emp}
                cookies={cookies} />
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdSearch={this.onUpdSearch} />
                    <AppFilter />
                </div>
    
                <EmpList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleCookie={this.onToggleCookie}
                    onToggleLike={this.onToggleLike} />
                <EmpAddForm 
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;