import React from 'react'
import Result from './components/Result'
import Funtions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import './App.css'

const App = () => {
  return (
    <main className='react-calculator'>
        <Result/>
        <Numbers onClickNumber={number => {
            console.log("Number", number)
        }}/>
        <Funtions
            onContentClear={clear => {console.log("Clear")}} onDelete={clear =>{console.log("Delete")}}/>
        <MathOperations
            onClickOperation={operation => {

            }}
            onClickEqual={equal => {
                
            }}
        />
    </main>)
}

export default App