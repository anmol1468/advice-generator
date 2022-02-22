import React, {useState, useEffect} from 'react'
import axios from "axios"
import "../../index.scss";
import divider from '../../images/pattern-divider-desktop.svg';
import dice from '../../images/icon-dice.svg';

const AdviceBox = () => {

  const [advice,setAdvice] = useState({
    "slip": {"id": 0, "advice": ""}
  })

    useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      setAdvice(res.data);
    })
    .catch(err => 'somethings wrong')
  },[]);
  
  function getAdvice () {
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      setAdvice(res.data);
    })
    .catch(err => 'somethings wrong')
  }
  


  return (
    <div className="adviceBox-wrap">
      <div className='adviceBox'>
        <p className='adviceBox__number'>ADVICE #{advice.slip.id}</p>
        <h3 className='adviceBox__quote'>&#x201C;{advice.slip.advice}&#x201D;</h3>
        <div className='adviceBox__divider'><img src={divider} alt="you don't need this if you are blind" /></div>
        <div className='adviceBox__dice' onClick={getAdvice} ><img src={dice} alt="next-quote button" /></div>
      </div>
    </div>
    
  )
}

export default AdviceBox