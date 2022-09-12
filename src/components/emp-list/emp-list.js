import EmpListItem from "../emp-list-item/emp-list-item";
import "./emp-list.css";

const EmpList = function ({data}) {

    const elements = data.map(item => {
        
        return (
            // <EmpListItem name={item.name} salary={item.salary}/>
            

            <EmpListItem {...item}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmpList;