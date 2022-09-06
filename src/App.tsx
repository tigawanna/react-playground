import React from 'react'
import './App.css'
import HomeSvg from '../src/assets/home.svg'
import {  GithubSvg } from './assets/github';
interface AppProps {

}

 const App: React.FC<AppProps> = ({}) => {
return (
  <div className="h-screen w-screen flex-center">
    <div>
   <GithubSvg/>
    </div>
  </div>
);
}

export default App
