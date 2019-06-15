import React from 'react';
import { useNavigation } from 'react-navi';
import { Button, ButtonWrapper, Title, Logo } from '../common/Layout';
import image from '../Resources/hangman.png';

const StartPage: React.FC = () => {

    const navigation = useNavigation();
    
    const routeChange = ({target: {name}} : any) => {
        navigation.navigate("/" + name);
    }

    return (
        <React.Fragment>
            <ButtonWrapper>
                <Title>Hangman Game</Title>
                <Logo src={image} />
                <Button name="gameplay" fontSize="5rem" onClick={routeChange}>Start the game</Button>
                <Button name="categories" fontSize="5rem" onClick={routeChange}>Show categories</Button>
                <Button name="scoreboard" fontSize="5rem" onClick={routeChange}>Show scoreboard</Button>
            </ButtonWrapper>
        </React.Fragment>
    )
}

export default StartPage;