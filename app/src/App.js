import React from 'react';
// import './App.css';
import Jokes from './components/Jokes';
import styled from 'styled-components';



function App() {
  return (
    <PageStyle>
      <MainStyle>
        <HeaderStyle>Lets get you laughing ...</HeaderStyle>
        <Jokes />
      </MainStyle>
    </PageStyle>
  );
}
const PageStyle = styled.div`
background-color: #203B3D;
height: 100vh;
max-width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align:center;
`
const MainStyle = styled.header`
background-color:#5C4B51;
width: 80%;
padding: 2%;
padding-bottom: 4%;
border-radius:10px;
border: 15px ridge #81A094;

`
const HeaderStyle = styled.h1`
color: #81A094;
text-shadow: 5px 5px 5px ${pr => pr.theme.primaryColor };
`

export default App;
