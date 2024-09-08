import logo from './logo.svg';
import './App.css';
import UseStatePrac from './components4/UseStatePrac';
import AddList from './components4/AddList';
import UseStateCallback from './components4/UseStateCallback';
import UserList from './components4/UserList';
import { useState } from 'react';
import { ThemeContext } from './components5/ThemeContext';
import ContextTheme from './components5/ContextTheme';
// import Properties from './component/Properties';
// import Wrapper from './component/Wrapper';
// import Content from './component/Content';
// import ChildComponent from './component/ChildComponent';
// import PropTypesComponent from './component/PropTypesComponent';
// import MapPrac from './component/MapPrac';
// import MenuComponent from './component/MenuComponent';
// import { useState } from 'react';
// import UserId from './component/UserId';
// import UserPw from './component/UserPw';
// import StatePrac from './component/StatePrac';
// import LiftingUp from './component/LiftingUp';
// import EventClick from './component_2/EventClick';
// import ChangeFontSize from './component_2/ChangeFontSize';
// import TextHi from './component_2/TextHi';
// import InputName from './component_2/InputName';
// import CheckBox from './component_2/CheckBox';
// import CheckBoxWrapper from './component_2/CheckBoxWrapper';
// import SubmitName from './component_2/SubmitName';
// import SubmitTextarea from './component_2/SubmitTextarea';
// import SubmitSelect from './component_2/SubmitSelect';
// import ImgAndSelect from './component_2/ImgAndSelect';
// import CntUpBtn from './component_2/CntUpBtn';
// import StyledComponent from './components3/StyledComponent';
// import MediaQuery from './components3/MediaQuery';
// import PostCss from './components3/PostCss';
// import SassPrac from './components3/SassPrac';
// import ImgSass from './components3/ImgSass';
// import ThirdScssComponent from './components3/ThirdScssComponent';
// import Nesting from './components3/Nesting';
// import Operator from './components3/Operator';

function App() {
  /* const movieList = [
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

  const [total, setTotal] = useState(0)
  function cntUp() {
    setTotal((prev) => prev + 1)
  } */

    //context 실습 - 다크모드
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      {/* <Properties name="hyun"/>
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
      <hr />
      <EventClick />
      <hr />
      <ChangeFontSize />
      <hr />
      <TextHi />
      <hr />
      <InputName />
      <hr />
      <CheckBoxWrapper>
        <CheckBox />
      </CheckBoxWrapper>
      <hr />
      <SubmitName />
      <hr />
      <SubmitTextarea />
      <hr />
      <SubmitSelect />
      <hr />
      <ImgAndSelect />
      <hr />
      <h1>Total: {total}</h1>
      <CntUpBtn onAdd={cntUp}/>
      <CntUpBtn onAdd={cntUp}/>
      <hr />
      <StyledComponent />
      <hr />
      <MediaQuery />
      <hr />
      <PostCss />
      <hr />
      <SassPrac />
      <hr />
      <ImgSass />
      <hr />
      <ThirdScssComponent />
      <hr />
      <Nesting />
      <hr />
      <Operator />
      <hr /> */}
      {/* <UseStatePrac />
      <hr />
      <AddList />
      <hr /> 
      <UseStateCallback />
      <hr />
      <UserList />
      <hr /> */}
      {/* Context 사용 */}
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <ContextTheme />
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
