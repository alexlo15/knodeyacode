import React, {Component, useEffect, useState} from "react";
import Ticker from "react-ticker";
import API from "../../utils/API"


const getTextFromApi = async (index) => {
    
    
    const text = await API.getScores()
    
    console.log(text);
    return text
  }
  
  let TextFromApi = () => {
    const names =[];
    const [text, setText] = useState('')
    useEffect(() => {
      getTextFromApi().then(text => {
        setText(names[text])
      })
    }, [])
  
    return text
      ? <h1>{text}</h1>
      : <h1>Placeholder</h1>
  }

export default getTextFromApi;