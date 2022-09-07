import EmpListItem from "../emp-list-item/emp-list-item";
import "./emp-list.css";

const EmpList = function () {
    return (
        <ul className="app-list list-group">
            <EmpListItem />
            <EmpListItem />
            <EmpListItem />
        </ul>
    );
}

export default EmpList;