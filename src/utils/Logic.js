import style from '../app/shared/StudentList.module.css';
import {  Button } from 'reactstrap';
import {useState,useEffect,useRef} from 'react';
import {useSpring,animated} from 'react-spring';
import useSound from 'use-sound';
import mainTheme from '../app/assets/sounds/1001000 music.mp3';
import two_thousand from '../app/assets/sounds/200032000.mp3';
import corrent_Ans from '../app/assets/sounds/correct answer.mp3';
import { SelectAllQuestions } from './Navigation';
import wrong_Ans from '../app/assets/sounds/wrong answer.mp3';
import Questions2 from "./Questions2";
import { AnswersA,AnswersB,AnswersC,AnswersD } from "./Answers";
import getSerious from '../app/assets/sounds/lets play.mp3';
import My_Modal from "./My_Modal";
import TheSideBar from '../utils/TheSideBar';
import fifty_Fifty from '../app/assets/img/ll_fifty.jpg';
import welcome from '../app/assets/img/welcome.jpg';
import beep from '../app/assets/sounds/beep.mp3';
import interface_click from '../app/assets/sounds/interface.mp3';
import Theme_64 from '../app/assets/sounds/64000_music.mp3';
import Ask_host from '../app/assets/img/ask_host.jpg';
import Ask_host2 from '../app/assets/img/Ask_the_Host.jpg';
//import Bar_Chart from "./Bar_Chart";
import Thud from '../app/assets/sounds/thud.mp3';
import Phone from '../app/assets/img/phone.png';
import my_Logo from '../app/assets/img/logo.jpg';
import settings from '../app/assets/img/settings2.jpg';
import { useSelector } from 'react-redux';
import QuestionForm from '../utils/QuestionForm';
import black from '../app/assets/img/black_wallpaper.jpg';
import Theme_150 from '../app/assets/sounds/150music.mp3';
import Theme_500 from '../app/assets/sounds/500music.mp3';
import Theme_Mill from '../app/assets/sounds/milmusic.mp3';
import final from '../app/assets/sounds/final_ans.mp3';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Logic = () =>{
    
    //responsible for changing the background color of the category when mouse over

    const button_Manage = (ans) =>{
        if (ans === 'a'){
            buttonA.current.style.background = 'orange';
            
            
        }
        else if (ans === 'b' ){
            buttonB.current.style.background = 'orange';
            
        }
        if (ans === 'c' ){
            buttonC.current.style.background = 'orange';
            
            
        }
        if (ans === 'd' ){
            buttonD.current.style.background = 'orange';
            
        }

        if (ans === 'a1'){
            buttonA.current.style.background = 'blue';
            
            
        }
        else if (ans === 'b1' ){
            buttonB.current.style.background = 'blue';
            
        }
        if (ans === 'c1' ){
            buttonC.current.style.background = 'blue';
            
            
        }
        if (ans === 'd1' ){
            buttonD.current.style.background = 'blue';
            
        }
    }
    //on mouse over button functionality
    const mouseOver = (event) =>{
        event.target.style.backgroundColor = 'orange';
        event.target.style.border = 'orange';
        beep_sound();    
    }
    //on mouse out button functionality
    const mouseOut = (event) =>{
        event.target.style.backgroundColor = 'blue';
    }

    //set the progress to use to cycle through the game
    const [progress,setProgress] = useState(1);
    //used to set up the counter
    const [counter, setCounter] = useState(60);
    //set up the amount of money the user earned
    const [bank,setBank] = useState(0);
    //set up if the lifeline fifty fifty is turned on
    const [isFifty,setisFifty] = useState(false);
    const [isFiftyUsedOnce,setisFiftyUsedOnce] = useState(false);
    //life line for ask the host
    const [askTheHost,setaskTheHost] = useState(false);
    const [askHostUsedOnce,setaskHostUsedOnce] = useState(false);
    //life line for ask the host
    const [phoneaFriend,setphoneaFriend] = useState(false);
    const [phoneaFriendUsedOnce,setphoneaFriendUsedOnce] = useState(false);
    const [questionNumber2,setQuestionNumber2] = useState(1);
    const [question_new,setQuestion_new] = useState(useSelector(SelectAllQuestions));

    
    //
    //the animated style for most the divs fading them
    const animatedStyle = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config:{ duration:1500 }
      })
    //some use ref hooks for the buttons
    const buttonA = useRef(null);
    const buttonB = useRef(null);
    const buttonC = useRef(null);
    const buttonD = useRef(null);

    //used to reset the buttons when they change color
    const resetButtons = () =>{
        buttonA.current.style.background = 'blue';
        buttonB.current.style.background = 'blue';
        buttonC.current.style.background = 'blue';
        buttonD.current.style.background = 'blue';
    }

    //sounds used to play in the game 
    const song = useRef(new Audio(two_thousand));
    const Theme_64_Grand = useRef(new Audio(Theme_64));
    const Theme_150_Grand = useRef(new Audio(Theme_150));
    const Theme_500_Grand = useRef(new Audio(Theme_500));
    const Theme_Milly = useRef(new Audio(Theme_Mill));
    const lets_go_theme = useRef(new Audio(getSerious));
    const play_main_theme = useRef(new Audio(mainTheme));
    const final_ans = useRef(new Audio(final));
    const hit = useRef(new Audio(Thud));
    
    
       const [correct_ans, {stop3 }] = useSound(corrent_Ans, {
        volume: 0.5,
       });
       const [wrong_ans, { stop4 }] = useSound(wrong_Ans, {
        volume: 0.5,
       });
       
       const [beep_sound, { stop6 }] = useSound(beep, {
        volume: 0.5,
       });
       const [ui_click, { stop7 }] = useSound(interface_click, {
        volume: 0.5,
       });
       
    //responsible for what to do when an answer is selected
    const getAnswers = (ans,the_progress,event) => {
        //ui_click();
        final_ans.current.play();
        if(ans === question_new[the_progress].ans){
            
            if (ans === 'a' && ans === question_new[the_progress].ans){
                buttonA.current.style.background = 'red';
                event.target.style.backgroundColor = 'red';
                const timer2 = setTimeout(() => {
                    buttonA.current.style.background = 'green';
                    event.target.style.backgroundColor = 'green';
                    
                }, 1000);
                
            }
            else if (ans === 'b' && ans === question_new[the_progress].ans){
                buttonB.current.style.background = 'red';
                event.target.style.backgroundColor = 'red';
                const timer2 = setTimeout(() => {
                    buttonB.current.style.background = 'green';
                    event.target.style.backgroundColor = 'green';
                    
                }, 1000);
            }
            if (ans === 'c' && ans === question_new[the_progress].ans){
                buttonC.current.style.background = 'red';
                event.target.style.backgroundColor = 'red';
                const timer2 = setTimeout(() => {
                    buttonC.current.style.background = 'green';
                    event.target.style.backgroundColor = 'green';
                    
                }, 1000);
                
            }
            if (ans === 'd' && ans === question_new[the_progress].ans){
                buttonD.current.style.background = 'red';
                event.target.style.backgroundColor = 'red';
                const timer2 = setTimeout(() => {
                    buttonD.current.style.background = 'green';
                    event.target.style.backgroundColor = 'green';
                    
                }, 1000);
            }
            const timer = setTimeout(() => {
                setQuestionNumber2(the_progress +1);
                correct_ans();
                setCounter(60);
                resetButtons();
              }, 3000);

            if(the_progress === 1 ){
                setBank(100);
                play_main_theme.current.play();
                
            }
            else if(the_progress === 2 ){
                setBank(200);
                
            }
            else if(the_progress === 3 ){
                setBank(300);
                
            }
            else if(the_progress === 4 ){
                setBank(500);
                
            }
            else if(the_progress === 5 ){
                setBank(1000);
                play_main_theme.current.pause();
                song.current.play();
            }
            else if(the_progress === 6 ){
                setBank(2000);
                
            }
            else if(the_progress === 7 ){
                setBank(4000);
                
            } 
            else if(the_progress === 8 ){
                
                setBank(8000);
                
            } 
            else if(the_progress === 9 ){
                setBank(16000);
                
            }
            else if(the_progress === 10 ){
                setBank(32000);
                setProgress(2);
            }
            else if(the_progress === 11 ){
                setBank(64000);
                
                
                setProgress(2);
            }
            else if(the_progress === 12 ){
                setBank(125000);
                
                setProgress(2);
            }
            else if(the_progress === 13 ){
                setBank(250000);
                setProgress(2);
            }
            else if(the_progress === 14 ){
                setBank(500000);
                
                setProgress(2);
            }
            else if(the_progress === 15 ){
                setBank(1000000);
                setProgress(0);
            }
        }
        else{
            
            if (ans === 'a' && ans != question_new[the_progress].ans){
                buttonA.current.style.background = 'red';
                event.target.style.backgroundColor = 'red';
                
                
            }
            else if (ans === 'b' && ans != question_new[the_progress].ans){
                buttonB.current.style.background = 'red';
                event.target.style.backgroundColor = 'red';
                
            }
            if (ans === 'c' && ans != question_new[the_progress].ans){
                buttonC.current.style.background = 'red';
                event.target.style.backgroundColor = 'red';
                
                
            }
            if (ans === 'd' && ans != question_new[the_progress].ans){
                buttonD.current.style.background = 'red';
                event.target.style.backgroundColor = 'red';
                
            }
            const timer3 = setTimeout(() => {
                wrong_ans();
                setProgress(0);
                
              }, 3000);
        }
    }

    //Responsible for setting up the timer if the timer is at 0 the game ends
    useEffect(() => {
    const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        
        if(counter === 0){
            setProgress(0);
        }
        return () => {clearInterval(timer)};
        }, );
    //50/50 is only given one second after that it defaults back to original
    useEffect(() => {
        const timer = setTimeout(() => {
        setisFifty(false);
        }, 1000);
        return () => clearTimeout(timer);
        }, [isFifty]);

        //When the game ends the progress is set to zero and the game ends
        if(progress === 0){
            play_main_theme.current.pause();
            
            const timer3 = setTimeout(() => {
                window.location.reload(false);
                
              }, 5000);
            return(
            <>
                
                <div className={style.theModal}><My_Modal prop={bank}/></div>
                
            </>
            )
            
        }
        //When progress is set to 1 the first question is loaded
        else if(progress === 1){
            
            
            
            if(!isFifty && !askTheHost && !phoneaFriend){
                
                return(
                <>
                <animated.div style={animatedStyle}>
                    <div className={style.cirle} style={{ width: 200, height: 200, marginTop: -505  }}>
                        <CircularProgressbar value={counter} text={`${counter}`} />
                    </div>
                <div className={style.main_logo}><img src={my_Logo}/></div>
                
                    <Button className={style.questionButton} color="info" > <Questions2 prop={question_new} prop2={questionNumber2} /> </Button>,
                    <button ref={buttonA} style={{background: 'blue', color:'white' }} onMouseOver={(event) => {mouseOver(event); button_Manage('a')}} onMouseOut={(event) => {mouseOut(event); button_Manage('a1')}} onClick={(event) => {getAnswers('a',questionNumber2,event)} } className={style.answerButtonA} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></button>
                    <button ref={buttonB} style={{background: 'blue', color:'white' }} onMouseOver={(event) => {mouseOver(event); button_Manage('b')}} onMouseOut={(event) => {mouseOut(event); button_Manage('b1')}} onClick={(event) => {getAnswers('b',questionNumber2,event)}} className={style.answerButtonB} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></button>
                    <button ref={buttonC} style={{background: 'blue', color:'white' }} onMouseOver={(event) => {mouseOver(event); button_Manage('c')}} onMouseOut={(event) => {mouseOut(event); button_Manage('c1')}} onClick={(event) => {getAnswers('c',questionNumber2,event)} } className={style.answerButtonC} color="info" ><AnswersC prop={question_new} prop2={questionNumber2} /></button>
                    <button ref={buttonD} style={{background: 'blue', color:'white' }} onMouseOver={(event) => {mouseOver(event); button_Manage('d')}} onMouseOut={(event) => {mouseOut(event); button_Manage('d1')}} onClick={(event) => {getAnswers('d',questionNumber2,event)} } className={style.answerButtonD} color="info" ><AnswersD prop={question_new} prop2={questionNumber2} /></button>
                </animated.div>
                {!isFiftyUsedOnce
                ?<animated.div style={animatedStyle} className = {style.mybutton} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true);}}><img src={fifty_Fifty}/></animated.div>
                :console.log('IT\'TS WORKING')
                }
                {!askHostUsedOnce
                ?<animated.div style={animatedStyle} className = {style.mybutton2} onClick={() => {setaskTheHost(true);setaskHostUsedOnce(true);}}><img src={Ask_host}/></animated.div>
                
                :console.log('IT\'TS WORKING')
                }
                {!phoneaFriendUsedOnce
                ?<animated.div style={animatedStyle} className = {style.mybutton3} onClick={() => {setphoneaFriend(true);setphoneaFriendUsedOnce(true);}}><img src={Phone}/></animated.div>
                
                :console.log('IT\'TS WORKING')
                }
                
                <animated.div style={animatedStyle} className = {style.my_counter}>{counter} </animated.div>
                <animated.div style={animatedStyle} className = {style.bankCheck}>${bank} </animated.div>
                <animated.div style={animatedStyle} className={style.sideBar}><TheSideBar prop={bank} prop2={questionNumber2}/></animated.div>  
                </>
                )
            }
            else if(isFifty){
                hit.current.play();

                if(question_new[questionNumber2].option1 === question_new[questionNumber2].correct  ){
                    return (
                    <>
                    <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('a',questionNumber2);} }className={style.answerButtonA} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></button>,
                    <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('b',questionNumber2);} }className={style.answerButtonB} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></button>
                    </>
                    )
                }
                else if(question_new[questionNumber2].option2 === question_new[questionNumber2].correct ){
                    return (
                        <>
                        <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('b',questionNumber2);} }className={style.answerButtonB} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></button>,
                        <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('d',questionNumber2);} }className={style.answerButtonD} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></button>
                        </>
                        )
                }
                else if(question_new[questionNumber2].option3 === question_new[questionNumber2].correct ){
                    return (
                        <>
                        <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('c',questionNumber2);} }className={style.answerButtonC} color="info" ><AnswersC prop={question_new} prop2={questionNumber2} /></button>,
                        <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('a',questionNumber2);} }className={style.answerButtonA} color="info" ><AnswersA prop={question_new} prop2={questionNumber2} /></button>
                        </>
                        )
                }
                else if(question_new[questionNumber2].option4 === question_new[questionNumber2].correct ){
                    return (
                        <>
                        <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('d',questionNumber2);} }className={style.answerButtonD} color="info" ><AnswersD prop={question_new} prop2={questionNumber2} /></button>,
                        <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('b',questionNumber2);} }className={style.answerButtonB} color="info" ><AnswersB prop={question_new} prop2={questionNumber2} /></button>
                        </>
                        )
                }
                
                }
                if(askTheHost){
                    hit.current.play();
                    const timer2 = setTimeout(() => {
                        setaskTheHost(false);
                        
                        setProgress(1);
                    }, 3000);
                    
                    return (
                    <>
                    <div style={animatedStyle} className={style.theHost}><img src={Ask_host2}></img> The Host Says The Answer Is: {question_new[questionNumber2].host}</div>
                    </>
                    )
                }
                if(phoneaFriend){
                    hit.current.play();
                    const timer2 = setTimeout(() => {
                        setphoneaFriend(false);
                        setProgress(1);
                        
                    }, 3000);
                    
                    return (
                    <>
                    <div style={animatedStyle} className={style.theHost}><img src={Phone}></img> Your Friend Say's The Answer Is: {question_new[questionNumber2].host}</div>
                    </>
                    )
                }
        }
        else if (progress === 2){
            if (bank === 64000){
                song.current.pause();
                
            }
            else if(bank === 125000){
                Theme_64_Grand.current.pause();
                
            }
            else if(bank === 250000){
                Theme_150_Grand.current.pause();
                
            }
            else if(bank === 500000){
                Theme_500_Grand.current.pause();
                
            }
            const timer2 = setTimeout(() => {
                
                lets_go_theme.current.play();
                if (bank === 64000){
                    
                    Theme_64_Grand.current.play();
                }
                else if(bank === 125000){
                    
                    Theme_150_Grand.current.play();
                }
                else if(bank === 250000){
                    Theme_500_Grand.current.play();
                    
                }
                else if(bank === 500000){
                    
                    Theme_Milly.current.play();
                }
                setProgress(1);
            }, 5000);
            
            
        }

        else if (progress === 3){
            return(
            <>
            <animated.div style={animatedStyle} className={style.introduction}><img style={{width:'85%', height:'540px' }} src={welcome}/>,
            <div className={style.main_logo3}><img src={settings} /></div>
            </animated.div>
            <button style={{background: 'blue', color:'white' }} className={style.introduction2} onMouseOver={(event) => mouseOver(event)} onClick={() => setProgress(1)} onMouseOut={(event) => mouseOut(event)}>START GAME</button>
            <button style={{background: 'blue', color:'white' }} className={style.introduction3} onMouseOver={(event) => mouseOver(event)} onClick={() => setProgress(4)} onMouseOut={(event) => mouseOut(event)}>SETTINGS</button>
            </>
            )
        }
        else if (progress === 4){
            return(
            <>
            <animated.div style={animatedStyle} className={style.introduction}><img style={{width:'85%', height:'540px' }} src={welcome}/>
                <div className={style.main_logo4}><QuestionForm /></div>
            </animated.div>
            <button style={{background: 'blue', color:'white' }} className={style.introduction2} onMouseOver={(event) => mouseOver(event)} onClick={() => setProgress(1)} onMouseOut={(event) => mouseOut(event)}>START GAME</button>
            <button style={{background: 'blue', color:'white' }} className={style.introduction3} onMouseOver={(event) => mouseOver(event)} onClick={() => setProgress(4)} onMouseOut={(event) => mouseOut(event)}>SETTINGS</button>
            <div><img src={black}/></div>
            <div className={style.create_question}>Create Your Own Question</div>
            </>
            )
        }
        //Loads the second set of questions and answers
        
}

export default Logic;