import React, { useState } from 'react';
import { Title, Content, PasswordArea, PasswordInformation, InputPassword, Hint, Button, NavigationArea } from '../common/Layout';
import { useGameplay } from './gameplay.state';
import Letter from '../Letter/Letter';
import { SingleType } from '../common/types';
import { useNavigation } from 'react-navi';
import { useSummary } from './summary.state';

const Gameplay: React.FC = () => {

    const {password, tries, setTries, rerenderFlag, setRerenderFlag, 
        metadata, letter, setLetter, enteredPassword, setEnteredPassword, hint, setHint} = useGameplay();
    const {saveScore, setName, time, setTime} = useSummary();
    const [isTimeSet, setIsTimeSet] = useState<Boolean>(false);

    const navigation = useNavigation();
   
    const checkLetter = (event: any) => {
        event.preventDefault();

        let repeatLetter = false;
        let wasGuessed = false;

        password.map((obj: SingleType) => {
            if(obj.letter === letter || obj.letter === letter.toUpperCase()) {
                if(obj.guessed === false) {
                    obj.guessed = true;
                    wasGuessed = true;
                } else {
                    repeatLetter = true;
                }
            }
        });

        if(wasGuessed === false && repeatLetter === false && letter !== '') {
            let limitTries = tries - 1;
            setTries(limitTries);
        }
        setLetter('');
        event.target.reset();
    }

    const setNewLetter = (event: any) => {
        setLetter(event.target.value);
    }
    
    const checkWholePassword = (event: any) => {
        event.preventDefault();
        console.log(enteredPassword)

        let passwordInString: string = '';
        password.map((obj: SingleType) => 
            passwordInString += obj.letter
        )

        if(passwordInString.toLowerCase() === enteredPassword.toLowerCase()) {
            password.map((obj: SingleType) => 
                obj.guessed = true
            )
        } else {
            setTries(0);
        }
        setEnteredPassword('')
    }

    const setWholePassword = (event: any) => {
        event.preventDefault();
        setEnteredPassword(event.target.value);
    }

    function checkIfPasswordWasGuessed() {
        if(password.length > 0) {
            let counterOfCorrect = 0;
            password.map((obj: SingleType) => {
                if(obj.guessed === true) {
                    counterOfCorrect++;
                }
            });
            if(counterOfCorrect === password.length) {
                if(!isTimeSet) {
                    setIsTimeSet(true);
                    setTime(Date.now() - time)
                }
                return true;
            }
            return false;
        }  
    }

    function limitTriesExceeded() {
        if(tries <= 0) {
            return true;
        }
        return false;
    }

    const rerenderGameplay = () => {
        rerenderFlag === 0 ? setRerenderFlag(1) : setRerenderFlag(0)
    }

    const showHint = () => {
        setHint(true);
    }

    return (
        <React.Fragment>
            <Content>
                <Title>{metadata.category}</Title>
                {hint ? <Hint>Hint: {metadata.hint}</Hint> : ''}
                
                <PasswordArea>
                    {password.map((pass: SingleType) => {
                        return <Letter key={pass.key} guessed={pass.guessed} letter={pass.letter} />})
                    }     
                </PasswordArea>

                <NavigationArea>
                    {checkIfPasswordWasGuessed() ? (<PasswordInformation>Congratulations! Password was guessed! Your time is {time/1000} s</PasswordInformation>)
                    : limitTriesExceeded() ? <PasswordInformation>The limit for trials has been exceeded</PasswordInformation> : ''}

                    {checkIfPasswordWasGuessed() ? 
                        <form onSubmit={saveScore} autoComplete="off">
                            <label htmlFor="username">Your name </label>
                            <InputPassword name="username" onChange={setName}/>
                            <Button fontSize="1rem">Save your score</Button>
                        </form> : ' '
                    }

                    {!limitTriesExceeded() && !checkIfPasswordWasGuessed() ? 
                    (<div>
                        <form onSubmit={checkLetter} autoComplete="off">
                            <label htmlFor="letter">Type letter </label>
                            <InputPassword name="letter" maxLength={1} onChange={setNewLetter} autoFocus/>
                            <Button fontSize="1rem">Check letter</Button>
                        </form>

                        <form onSubmit={checkWholePassword} autoComplete="off">
                            <label htmlFor="wholePassword">Type whole password </label>
                            <InputPassword name="wholePassword" onChange={setWholePassword}/>
                            <Button fontSize="1rem">Check whole password</Button>
                        </form>
                    </div>) : ''}
                    <h1>The rest of the trials: {tries}</h1>
                    {!hint ? <Button fontSize="1rem" onClick={showHint}>Show hint</Button> : ''}               
                    <Button fontSize="1rem" onClick={rerenderGameplay}>Draw new password</Button>
                    <Button fontSize="1.5rem" onClick={() => navigation.navigate('/')}>Back to Start Page</Button>
                </NavigationArea>
            </Content>
        </React.Fragment>
    )
}
export default Gameplay;