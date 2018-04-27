import React from 'react';
import Header from './Header';
import UserLogin from './UserLogin';

export default class LandingPage extends React.Component {

    componentDidMount() {
      console.log("component did mount.")
    }
    componentDidUpdate(prevProps, prevState) {
      console.log("component did update.")
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
    render() {
  
      return (
        <div className="background homepage">
        <Header />
        <UserLogin />
        </div>
      );
    }
}
