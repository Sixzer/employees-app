import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmpList from "../emp-list/emp-list";
import EmpAddForm from "../emp-add-form/emp-add-form";

import "./app.css";

const App = function() {

    const data = [
        {name: "Lev", salary: 55, cookie: false, id:1},
        {name: "Alexandr", salary: 777, cookie: true, id:2},
        {name: "Irina", salary: 6666, cookie: false, id:3},
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmpList data={data}/>
            <EmpAddForm />
        </div>
    );
}

export default App;