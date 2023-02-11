import Questions from "./Questions";
import style from '../app/shared/StudentList.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import {createElement,useState,useEffect,useRef} from 'react';
import { LOADED_QUESTIONS } from "../app/shared/LOADED_QUESTIONS";
import { Compare_Answer } from "./Navigation";
import yellow from '../app/assets/img/yellow.png';

const Logic = () =>{
    const [progress,setProgress] = useState(1);
    const [questionNumber,setQuestionNumber] = useState(1);

        
        if(progress === 1){
        
        return(
        <>
         <Questions prop={questionNumber}/>
          <Button className={style.option1} color="info" onClick={() => {setQuestionNumber(2); setProgress(2)} } >A</Button>
          <Button className={style.option2} color="info" >B</Button>
          <Button className={style.option3} color="info" >C</Button>
          <Button className={style.option4} color="info" >D</Button>
          <Button className={style.yellow} color='warning'></Button>
          </>
        )
        
        }
        else if(progress === 2){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info">A</Button>
              <Button className={style.option2} color="info">B</Button>
              <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(3); setProgress(3)} }>C</Button>
              <Button className={style.option4} color="info" >D</Button>
              <Button className={style.yellowb} color='warning'></Button>
              </>
            )
            
        }
        else if(progress === 3){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" onClick={() => {setQuestionNumber(4); setProgress(4)} }>A</Button>
              <Button className={style.option2} color="info">B</Button>
              <Button className={style.option3} color="info">C</Button>
              <Button className={style.option4} color="info" >D</Button>
              <Button className={style.yellowc} color='warning'></Button>
              </>
            )
            
        }
        else if(progress === 4){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" >A</Button>
              <Button className={style.option2} color="info">B</Button>
              <Button className={style.option3} color="info" onClick={() => {setQuestionNumber(5); setProgress(5)} }>C</Button>
              <Button className={style.option4} color="info" >D</Button>
              <Button className={style.yellowd} color='warning'></Button>
              </>
            )
            
        }
        else if(progress === 5){
        
            return(
            <>
             <Questions prop={questionNumber}/>
              <Button className={style.option1} color="info" >A</Button>
              <Button className={style.option2} color="info" onClick={() => {setQuestionNumber(6); setProgress(6)} }>B</Button>
              <Button className={style.option3} color="info">C</Button>
              <Button className={style.option4} color="info" >D</Button>
              <Button className={style.yellowe} color='warning'></Button>
              </>
            )
            
        }
        
}

export default Logic