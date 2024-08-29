import logo from './logo.svg';
import './App.css';
import Properties from './component/Properties';
import Wrapper from './component/Wrapper';
import Content from './component/Content';
import ChildComponent from './component/ChildComponent';
import PropTypesComponent from './component/PropTypesComponent';
import MapPrac from './component/MapPrac';
import MenuComponent from './component/MenuComponent';
import { useState } from 'react';
import UserId from './component/UserId';
import UserPw from './component/UserPw';
import StatePrac from './component/StatePrac';
import LiftingUp from './component/LiftingUp';

function App() {
  const movieList = [
    {
        title: '괴물',
        open: '2023.06.02',
        image: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87716/87716_320.jpg"
    },
    {
        title: '라라랜드',
        open: '2016.12.07',
        image: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79273/79273_320.jpg"
    },
    {
        title: '킹스맨',
        open: '2021.12.22',
        image: "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82479/82479_320.jpg"
    }
  ]

  const [value, setValue] = useState('안녕')
  function changeValue() {
    setValue('반갑다')
  }
  function reset() {
    setValue('안녕')
  }

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  function idCheck(id) {
    setId(id)
  }
  function pwCheck(pw) {
    setPw(pw)
  }
  function loginCheck() {
    if(id === "hyun" && pw === "123") {
      alert('로그인 성공')
    }else{
      alert('로그인 실패')
    }
  }

  const [sen, setSen] = useState('')
  function sentence(data) {
    setSen(data)
  }

  return (
    <div className="App">
      <Properties name="hyun"/>
      <Properties />
      <hr />
      <Wrapper>
        <Content/>
        <ChildComponent/>
      </Wrapper>
      <hr/>
      <PropTypesComponent name="hyun" age={24} region="suwon"/>
      <hr />
      <MapPrac />
      <hr/>
      <h1>영화 리스트</h1>
      {
        movieList.map((movie, index) => 
          <MenuComponent title={movie.title} 
          open={movie.open}
          image={movie.image} key={index}/>
        )
      }
      <hr />
      <h1>{value}</h1>
      <button onClick={changeValue} onMouseLeave={reset}>값 변경</button>
      <hr />
      <UserId checkId={idCheck}/>
      <UserPw checkPw={pwCheck}/>
      <button onClick={loginCheck}>로그인</button>
      <hr />
      <StatePrac/>
      <hr />
      <h3>전달받은 데이터: {sen}</h3>
      <LiftingUp changeSen={sentence}/>
    </div>
  );
}
export default App;
