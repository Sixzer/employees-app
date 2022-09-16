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
            ]
        }
    }

    deleteItem = (id) => {


        localStorage.removeItem(id);

        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            cookie: false,
            liked: false,
            id: nextId(),
        }
        localStorage.setItem(newItem.id, JSON.stringify(newItem));
        
        this.setState(({data}) => {
            const newArr = [ ...data, newItem];
            return {
                data: newArr,
            } 
        })
    }

    onToggleCookie = (id) => {
<<<<<<< HEAD
        
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, cookie: !item.cookie}
                }
                return item;
            })
        }))

=======
>>>>>>> 3b214b1 (fix localStorage)
        console.log(`Cookie this ${id}`);
    }

    onToggleLike = (id) => {
<<<<<<< HEAD

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, liked: !item.liked}
                }
                return item;
            })
        }))

        console.log(`Like this ${id}`);
    }

    render () {
=======
        console.log(`Like this ${id}`);
    }

    render() {
>>>>>>> 3b214b1 (fix localStorage)

        const emp = this.state.data.length;
        const cookies = this.state.data.filter(item => item.cookie === true).length;

        return (
            <div className="app">
                <AppInfo 
                emp={emp}
                cookies={cookies} />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmpList 
<<<<<<< HEAD
                    data={this.state.data}
=======
                    data={data}
>>>>>>> 3b214b1 (fix localStorage)
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