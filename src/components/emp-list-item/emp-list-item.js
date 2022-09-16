import "./emp-list-item.css";

const EmpListItem = (props) =>{

    const { name, salary, onDelete, cookie, liked, onToggleCookie, onToggleLike } = props;

    let classNames = "list-group-item d-flex justify-content-between"

    if (cookie === true) {
        classNames += " increase"
    }
    if (liked === true) {
        classNames += " like"
    }

    return (
        <li 
            className={classNames}>
            <span 
                className="list-group-item-label"
                onClick={onToggleLike}>{name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={`${salary} $`} />
            <div 
                className="d-flex justify-content-center align-items-center">
                <button 
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleCookie}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i 
                        className="fas fa-trash"></i>
                </button>
                <i 
                    className="fas fa-star"></i>
            </div>
        </li>
    );
    
};

export default EmpListItem;