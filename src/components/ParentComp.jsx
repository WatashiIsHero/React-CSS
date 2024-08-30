import { ChildComp } from './ChildComp';
import { useState, useCallback } from 'react';

export const ParentComp = () => {
  // 入力値
  const [inputText, setText] = useState('');
  const setInput = (e) => setText(e.target.value);
  console.log('通ってます');

  // 表示ボタン
  const [show, setShow] = useState(false);
  const changeShowStatus = () => useCallback(setShow(!show), [show]);
  const closeDialog = () => useCallback(setShow(false), []);

  return (
    <>
      <input type="text" onChange={setInput} value={inputText} />
      <p>{inputText}</p>
      <br />
      <br />
      <button onClick={changeShowStatus}>表示</button>
      <ChildComp show={show} close={closeDialog} />
    </>
  );
};
