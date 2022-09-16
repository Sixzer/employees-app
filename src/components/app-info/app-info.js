import './app-info.css'

const AppInfo = ({cookies, emp}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {emp}</h2>
            <h2>Премию получат: {cookies}</h2>
        </div>
    );
}

export default AppInfo;