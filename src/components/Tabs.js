import React, { useState } from 'react';
// import styled from 'styled-components';
import styles from './Tabs.module.css';

const Tabs = ({ children }) => {
  const [openTab, setOpenTab] = useState(children[0].props.label);



  const handleClick = (e, newOpenTab) => {
    e.preventDefault();
    setOpenTab(newOpenTab);
  };

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map((tab) => {
          return (
            <li
              className={tab.props.label === openTab ? styles.current : ''}
              key={tab.props.label}
            >
              <a href="#" onClick={(e) => handleClick(e, tab.props.label)}>
                {tab.props.label}
              </a>
            </li>
          );
        })}
      </ul>
      {children.map((one) => {
        if (one.props.label === openTab)
          return (
            <div key={one.props.label} className={styles.content}>
              {one.props.children}
            </div>
          );
      })}
    </div>
  );
};

export default Tabs;
