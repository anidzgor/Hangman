import React from 'react';
import { Title, Content, ScoreTable, ScoreTableItem, Button } from '../common/Layout';
import { LIST_OF_SCORES_KEY } from '../common/StorageItems';
import { useNavigation } from 'react-navi';
import { ItemScore } from '../common/types';

const Scoreboard: React.FC = () => {

    const navigation = useNavigation();

    let array:ItemScore[] = [];
    let score: ItemScore[] = Array.from(JSON.parse(localStorage.getItem(LIST_OF_SCORES_KEY) || '{}'));
    score.map((item: ItemScore) => {
            array.push(item)
        });
    array.sort((a, b) => (a.time > b.time) ? 1 : -1); 

    return (
        <React.Fragment>
            <Content>
                <Title>Scoreboard</Title>
                <ScoreTable>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Time(s)</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {array.map((item: ItemScore, key: number) => {
                            if(key < 10) {
                                return (
                                    <tr key={key}>
                                        <ScoreTableItem>{item.name}</ScoreTableItem>
                                        <ScoreTableItem>{item.time}</ScoreTableItem>
                                    </tr>
                                )
                            }
                        }                
                        )}
                    </tbody>
                </ScoreTable>
                <Button fontSize="1.5rem" onClick={() => navigation.navigate('/')}>Back to Start Page</Button>
            </Content>
        </React.Fragment>
    )
}

export default Scoreboard;