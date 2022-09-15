import { Component } from 'react';
import "./emp-list-item.css";

class EmpListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cookie: false,
            liked: false,
        }
    }

    onCookie = () => {
        this.setState(({cookie}) => ({
            cookie: !cookie,
        }))
    }

    isLiked = () => {
        this.setState(({liked})=> ({
            liked: !liked,
        }))
    }

    render() {

        const { name, salary, onDelete } = this.props;
        const { cookie, liked } = this.state;
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
                    onClick={this.isLiked}>{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={`${salary} $`} />
                <div 
                    className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onCookie}>
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
    }
};

export default EmpListItem;