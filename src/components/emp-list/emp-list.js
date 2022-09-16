import EmpListItem from "../emp-list-item/emp-list-item";
import "./emp-list.css";

const EmpList = ({data, onDelete, onToggleProperty}) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item;

        return (
            // <EmpListItem name={item.name} salary={item.salary}/>
            <EmpListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProperty={(e) => onToggleProperty(id, e.currentTarget.getAttribute("data-toggle"))} /> 
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmpList;