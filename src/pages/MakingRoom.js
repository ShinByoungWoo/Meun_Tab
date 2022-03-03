import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
// import Button from '../elements/Button';
import Text from '../elements/Text';
// import input from '../elements/Text';
import Tabs from '../components/Tabs';
import styles from '../components/Tabs.module.css';

// 방입장 화면
// 입장전 게임 설정 등

const Markingroom = () => {
  // const [openTab, setOpenTab] = useState(1);

  const [count, setCount] = useState(6);
  return (
    <Grid>
      <Text bold margin="10px" size="32px">
        새로운 방을 만들어 보세요!
      </Text>
      <div style={{ padding: '32px' }}> 문 그림 자리</div>

      <Tabs>
        <div label="방제 설정" className={styles.menuTab1}>
          <input type="text" placeholder="방 제목"></input>
          <input type="password" placeholder="방 비밀번호"></input>
          <button>완료</button>
        </div>

        <div label="인원 설정" className="menuTab2">
          최소 6명 ~ 최대 10명
          {Array.from({ length: 10 }, (Ants, index) => {
            return (
              <Ant
                key={index}
                onClick={() => {
                  setCount(index + 1);
                }}
                style={{
                  backgroundColor: count < index + 1 ? '#918280' : 'yellow',
                }}
              />
            );
          })}
          <button>완료</button>
        </div>

        <div label="시간 설정" className="menuTab3">
          <div >
            <input placeholder="test"></input>
            <button>C</button>
          </div>
        </div>
      </Tabs>
    </Grid>
  );
};

const Ant = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: yellow;
  border: 1px solid black;
  cursor: pointer;
`;

export default Markingroom;
