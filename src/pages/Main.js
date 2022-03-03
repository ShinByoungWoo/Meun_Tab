import React from 'react';
import { useState, useEffect } from 'react';

import IdentityCheckModal from '../components/IdentityCheckModal';

const Main = () => {
  //게임 시작 후 역할 모달로 보여주기 (추후에 게임 시작값이 들어오면 true로 바꿔주는 코드로 작성하기)
  const [isShowing, setIsShowing] = useState(true);
  useEffect(() => {
    if (isShowing) {
      const notiTimer = setTimeout(() => {
        setIsShowing(false);
      }, 3000);
      return () => clearTimeout(notiTimer);
    }
  }, [isShowing]);

  return (
    <>
      main
      <div>
        {isShowing && (
          <IdentityCheckModal message="마퓌아"></IdentityCheckModal>
        )}
      </div>
    </>
  );
};

export default Main;
