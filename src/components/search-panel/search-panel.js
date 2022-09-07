import "./search-panel.css"

const SearchPanel = function() {
    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника" />
    );
};

export default SearchPanel;