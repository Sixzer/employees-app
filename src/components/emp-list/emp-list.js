import EmpListItem from "../emp-list-item/emp-list-item";
import "./emp-list.css";

const EmpList = ({data, onDelete, onToggleCookie, onToggleLike}) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item;

        return (
            // <EmpListItem name={item.name} salary={item.salary}/>
            <EmpListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleCookie={() => onToggleCookie(id)}
            onToggleLike={() => onToggleLike(id)} /> 
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmpList;