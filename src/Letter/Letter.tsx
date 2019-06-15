import React from 'react';
import { Box } from '../common/Layout';
import { SingleType } from '../common/types';

const Letter = ({letter, guessed} : SingleType) => {

    if(letter === ' ') {
        return <Box backgroundColor="black" />
    }

    if(!guessed) {
        return <Box backgroundColor="white"></Box>
    } else {
        return (
            <Box backgroundColor="#bef75b">
                {letter}
            </Box>
        );
    }
}

export default Letter;