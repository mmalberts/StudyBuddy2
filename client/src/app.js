import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import StudyBuddy from './Router/StudyBuddy';
import '../src/styles/style.css';
import '../src/styles/components/Header.css';
import '../src/styles/components/UserLogin.css';
import '../src/styles/components/Navbar.css';
import './styles/components/flashcards.css';
import './styles/components/About.css';
import './styles/components/Add.css';
import './styles/components/questions.css';

ReactDOM.render(<StudyBuddy />, document.getElementById('app'));