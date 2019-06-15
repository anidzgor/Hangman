import { useState, useEffect } from "react";
import Api from "../Sources/Api";
import { SingleType, MetadataPassword, CategoryItem } from "../common/types";

export const useGameplay = () => {

    const [password, setPassword] = useState<SingleType[]>([]);
    const [tries, setTries] = useState<number>(0);
    const [rerenderFlag, setRerenderFlag] = useState<number>(0);
    const [metadata, setMetadata] = useState<MetadataPassword>({
        category: '',
        hint: ''
    });
    const [letter, setLetter] = useState<string>('');
    const [enteredPassword, setEnteredPassword] = useState<string>('');
    const [hint, setHint] = useState<boolean>(false);

    var array: SingleType[] = [];

    const fetchPassword = async() => {
        const {data} = await Api.get("/");
        const randPasswordIndex = Math.floor((Math.random() * data.words.length));
        const categoryItem: CategoryItem = data.words[randPasswordIndex];
        Array.from(categoryItem.title).map((letter: string, index: number) => {
            if(letter === ' ') {
                array.push({"key": index, "letter": letter, "guessed": true});
            } else {
                array.push({"key": index, "letter": letter, "guessed": false});
            }
        })
        setTries(data.tries);
        setHint(false);
        setMetadata(
            {
                category: categoryItem.category,
                hint: categoryItem.hint,

            }
        );
        setPassword(array);
        console.log("Password for tests: " + categoryItem.title);
    }

    useEffect(() => {
        fetchPassword();
    }, [rerenderFlag]);
    
    return {
        password,
        tries,
        setTries,
        rerenderFlag,
        setRerenderFlag,
        metadata,
        letter,
        setLetter,
        enteredPassword,
        setEnteredPassword,
        hint,
        setHint
    }
}