import PropTypes from "prop-types"

const Board = ({articles}) => {
    return (
        <div>
            <h1>Board</h1>

            <ul>
                {articles.map(article => (
                    // map 돌릴 때 꼭 key 넣어주기: 각 요소를 데이터와 매칭시켜주는 역할. 데이터 재사용 할 때 리소스 비용 줄일 수 있음
                    <li key={article.id}>
                        {article.id} | {article.title} | {article.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}


Board.propTypes = {
    articles: PropTypes.array
}

export default Board;