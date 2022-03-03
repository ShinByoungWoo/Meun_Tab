import React from 'react';
import styled from 'styled-components';
import { BsGear } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <React.Fragment>
      <Wrap>
        <MyInfoIcon>
          <FaUser size={36} />
        </MyInfoIcon>
        <SettingIcon>
          <BsGear size={36}/>
        </SettingIcon>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  background-color: #000000;
`;

const MyInfoIcon = styled.div`
  color: white;
  margin: 10px;
`;
const SettingIcon = styled.div`
  color: white;
  margin: 10px;
`;
export default Header;
