import { memo } from 'react';

export const ChildComp = memo(({ show, close }) => {
  const style = {
    posioton: 'relative',
    width: '200px',
    height: '200px',
    backgroundColor: 'green',
  };

  const center = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  for (let idx = 0; idx < 10000; idx++) {
    console.log(`${idx}回目の出力です。`);
  }

  if (show) {
    return (
      <div style={style}>
        <p>子コンポーネント</p>
        <button style={center} onClick={close}>
          閉じる
        </button>
      </div>
    );
  } else {
    return null;
  }
});
