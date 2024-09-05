import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Board from './components/Board';
import Counter from "./components/Counter"
import Input from './components/Input';
import AutoCounter from './components/AutoCounter';
import Pagination from './components/Pagination';
import PageHandler from './components/PageHandler';

function App() {
  /* const [visible, setVisible] = useState(false)

  const articles = [
  {
    id: 1,
    title: 'a',
    author: 'aaa'
  }, {
    id: 2,
    title: 'b',
    author: 'bbb'
  }, {
    id: 3,
    title: 'c',
    author: 'ccc'
  }, {
    id: 4,
    title: 'd',
    author: 'ddd'
  }] */

  // Counter
  // const [totalCount, setTotalCount] = useState(0)

  // useEffect 실습
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log(`Clicked ${count} times.`)
  // }, [count]) //감지할 것이 count -> count에 변화가 있으면 console 출력

  // // //useEffect는 lifecycle처럼 사용도 가능
  // // useEffect(() => {
  // //   console.log(`Component Loaded`)
  // // }, []) //mount될 때 최초 한 번만 실행

  // useEffect(() => {
  //   console.log(`Component Loaded`);
  //   //scroll이벤트 발생하면 y포지션 출력
  //   const handleScroll = () => {
  //     console.log(window.scrollY); //스크롤 한 y위치가 콘솔창에 출력됨
  //   }

  //   document.addEventListener("scroll", handleScroll) //이렇게 전역적으로 이벤트 잡은 경우 반드시 해제해줘야 함
  //   //useEffect에서 return을 하게 되면, 컴포넌트가 제거될 때 실행됨
  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, [])

  // const inputRef = useRef();

  //페이지네이션
  //클라이언트 사이드에서의 페이지네이션
  const [page, setPage] = useState(0);
  const articles = new Array(100).fill().map((_, i) => ({
    id: i,
    title: `${i}번 게시물`
  }))

  const limit = 6;
  const offset = page * limit;

  return (
    <div className="App">
      {/* 분기처리 */}
      {/* 버튼 눌렀을 때 !visible */}
      {/* <button onClick={() => setVisible(!visible)}>Toggle</button> */}
      {/* visible이 참이면 뒤 코드를 보여줌*/}
      {/* {visible && (<h1>분기 처리 연습</h1>)} */}

      {/* {visible ? <Board articles={articles} /> : <p>게시판 보려면 클릭</p>} */}
      {/* TotalCount: {totalCount}
      <Counter 
      onIncrease={(count) => setTotalCount(totalCount + 1)}
      onDecrease={(count) => setTotalCount(totalCount - 1)} />
      <Counter 
      onIncrease={(count) => setTotalCount(totalCount + 1)}
      onDecrease={(count) => setTotalCount(totalCount - 1)} />
      <Counter 
      onIncrease={(count) => setTotalCount(totalCount + 1)}
      onDecrease={(count) => setTotalCount(totalCount - 1)} /> */}

      {/* useEffect 실습 */}
      {/* <div> You clicked {count} times.</div>
      <button onClick={() => setCount(count + 1)}>+</button>

      <div style={{height: 1000}}></div> */}

      {/* useRef 실습 */}
      {/* button 누르면 input태그 포커스됨 <- 단, dom에 직접 접근하는 것은 리액트에서 막기 때문에 useRef 이용하는 것 */}
      {/* <input ref={inputRef} /> */}
      {/* <Input ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>Focus</button> */}
      {/* useRef를 지역변수로 사용하는 경우 */}
      {/* <AutoCounter /> */}
      <PageHandler defaultPage={0} limit={limit} total={articles.length} onChange={setPage}/>
      <Pagination articles={articles.slice(offset, offset + limit)}/>

    </div>
  );
}

export default App;
