import styled from 'styled-components';
import { IBackgroundProps, IFontSize } from './types';

export const Logo = styled.img`
    width: 15rem;
    height: 8rem;
`;

export const Content = styled.div`
    background-color: #aec3e5;
    height: 100vh;
`;

export const PasswordArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const Box = styled.button`
    background-color: ${(props: IBackgroundProps) => props.backgroundColor ? props.backgroundColor : 'white'};
    height: 3rem;
    width: 3rem;
    margin: 0.5rem;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 1rem;
    outline: none;
    cursor: pointer;
    pointer-events: none;
`;

export const Title = styled.div`
    color: white;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
`;

export const Hint = styled.div`
    color: #fff316;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
`;

export const NavigationArea = styled.div`
    background-color: #aec3e5;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PasswordInformation = styled.h1`
    color: #f4eb42;
`;

export const InputPassword = styled.input`
    box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border: 1px solid #C2C2C2;
	box-shadow: 1px 1px 4px #EBEBEB;
	-moz-box-shadow: 1px 1px 4px #EBEBEB;
	-webkit-box-shadow: 1px 1px 4px #EBEBEB;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	padding: 7px;
	outline: none;
`;

export const ButtonWrapper = styled.div`
    background-color: #aec3e5;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button`
    margin-top: 2rem;
    background: #FF8500;
    background-image: -webkit-linear-gradient(top, #FF8500, #FF8500);
    background-image: -moz-linear-gradient(top, #FF8500, #FF8500);
    background-image: -ms-linear-gradient(top, #FF8500, #FF8500);
    background-image: -o-linear-gradient(top, #FF8500, #FF8500);
    background-image: linear-gradient(to bottom, #FF8500, #FF8500);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #ffffff;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    font-size: ${(props: IFontSize) => props.fontSize ? props.fontSize : '2rem'};

    &:hover {
        background: #3cb0fd;
        background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
        background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
        text-decoration: none;
    }
`;

export const ScoreTable = styled.table`
    margin: auto;
	width: 300px;
	border-collapse: collapse;
	border: 1px solid #000;
    background-color: white;
`;

export const ScoreTableItem = styled.td`
    color: #FF8500;
    text-align: center;
    padding: 1rem;
    background-color: black;
`;