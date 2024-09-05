import { useState } from "react"

//이 컴포넌트 시작될 때 페이지 번호를 몇 번으로 시작할지, 몇 개의 단위로 자를지, 들어오는 데이터의 총 수는 몇 개인지 받아오기
const PageHandler = ({defaultPage, limit, total, onChange}) => {
    const [page, setPage] = useState(defaultPage);
    
    //올림함수를 이용해서 초과되었다면 페이지 하나 더 추가하도록
    const totalPage = Math.ceil(total/limit)

    const handleChangePage = (newPage) => {
        onChange(newPage)
        setPage(newPage)
    }

    return (
        <div>
            <button onClick={() => page !== 0 && handleChangePage(page - 1)}>이전</button>
            {Array.from(new Array(totalPage), (_, i) => i)
            .filter((i) => {
                if (page < 3) {
                    return i < 5;
                } else if (page > totalPage - 3){
                    return i >= totalPage - 5
                }
                return i>= page - 2 && i <= page + 2;
            })
            .map((i) => (
                <button 
                key={i} 
                onClick={() => handleChangePage(i)}
                style={{ backgroundColor: page === i ? 'red' : undefined}}>
                {i + 1}
                </button>
            ))}
            <button onClick={() => page + 1 !== totalPage && handleChangePage(page + 1)}>다음</button>
        </div>
    )
}

export default PageHandler;