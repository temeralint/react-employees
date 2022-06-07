import './AppInfo.css';

function Info({data}) {
    return (
        <div className="app_info">
            <h1>Учет сотрудников в компании M</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {data.filter(item => item.isLiked == true).length}</h2>
        </div>
    )
}

export default Info;