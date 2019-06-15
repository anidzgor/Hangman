import React, { useState, useEffect } from 'react';
import { LIST_OF_SCORES_KEY } from '../common/StorageItems';
import { useNavigation } from 'react-navi';
import { ItemScore } from '../common/types';

export const useSummary = () => {

    const [username, setUsername] = useState<string>('');
    const [time, setTime] = useState<number>(0);
    const navigation = useNavigation();

    useEffect(() => {
        setTime(Date.now());
    }, []);
    

    const saveScore = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let scoreObj: ItemScore = {
            name: username,
            time: time/1000
        }

        let array:ItemScore[] = [];
        let score:ItemScore[] = Array.from(JSON.parse(localStorage.getItem(LIST_OF_SCORES_KEY) || '{}'));
        score.map((item: ItemScore) => {
            array.push(item)
        });
        array.push(scoreObj);
        localStorage.setItem(LIST_OF_SCORES_KEY, JSON.stringify(array));
        navigation.navigate("/scoreboard");
    }

    const setName = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUsername(e.currentTarget.value);
    }

    return {
        setUsername,
        saveScore,
        setName,
        time,
        setTime
    }
}