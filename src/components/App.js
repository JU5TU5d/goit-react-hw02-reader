import React from 'react';
import Reader from './Reader/Reader';
import publications from '../publications.json';
import '../style.css';

const App = () => {
  return (
    <>
      {/* &#10059; */}
      {/* &#9808; */}
      &trade;
      <Reader items={publications} />
    </>
  );
};
export default App;
