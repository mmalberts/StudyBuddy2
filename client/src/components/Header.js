import React from 'react';

const Header = (props) => {
  return (
    <div className="navbar gradient">
      <h1 className="logo">{props.title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: 'StudyBuddy'
};

export default Header;