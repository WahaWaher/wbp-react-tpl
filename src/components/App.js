import React from 'react';
import Text from '@/components/Text';
import reactLogoSrc from '@/img/react-logo.png';

const App = () => {
  const [{ title, content }, setState] = React.useState({
    title: 'Webpack React Template 2021',
    content: '...',
  });

  const changeState = () => {
    setState((s) => ({ ...s, content: s.content + '.' }));
  };

  return (
    <div className="container">
      <h4 className="d-flex align-items-center my-2">
        <img className="logo me-1" src={reactLogoSrc} alt="logo" />
        <Text>{title}</Text>
        <Text>{content}</Text>
      </h4>
      <button className="btn btn-primary btn-sm" onClick={changeState}>
        Change State
      </button>
    </div>
  );
};

export default App;
