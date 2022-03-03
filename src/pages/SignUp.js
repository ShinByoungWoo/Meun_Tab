import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';

const SignUp = () => {
  return (
    <React.Fragment>
      <Wrap>
      <SignUpBox>
        <ImageBox>
          <Logo src="https://o.remove.bg/downloads/6a941e07-f203-4e69-97b5-aae49b83e64f/%EC%96%B4%EB%AA%BD%EC%96%B4%EC%8A%A4-removebg-preview.png" />
        </ImageBox>
        
          <Id placeholder="아이디를 입력해주세요"></Id>
          <Check>중복확인</Check>
          <br />
          <NickName placeholder="닉네임을 입력해주세요"></NickName>
          <Check>중복확인</Check>
          <br />
          <Pwd placeholder="비밀번호를 입력해주세요"></Pwd>
          <br />
          <Pwd placeholder="비밀번호 확인"></Pwd>
          <br />
          <SignUpButton onClick={() => history.push('/login')}>
            회원가입하기
          </SignUpButton>
        </SignUpBox>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
    display: flex;
  height: 100vh;
  align-items: center;
  vertical-align: middle;
  background-color: #000000;
`;
const ImageBox = styled.div`
  width: 100%;
`;

const Logo = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: contain;
`;

const SignUpBox = styled.div`
  text-align: center;
  width: 100%;
`;
 
const Id = styled.input`
  width: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 7px;
`;

const Check = styled.button`
    width: 70px;
`;

const NickName = styled.input`
  width: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 7px;
`;

const Pwd = styled.input`
  width: 270px;
  margin: 8px;
  padding: 8px;
  border-radius: 7px;
`;
const SignUpButton = styled.button`
  margin: 8px;
  padding: 8px;
  border-radius: 7px;
`;

export default SignUp;
