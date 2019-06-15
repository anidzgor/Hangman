import React from 'react';
import ReactDOM from 'react-dom';
import {mount, route} from 'navi';
import {Router} from 'react-navi';

import './index.css';
import StartPage from './StartPage/StartPage';
import Api from './Sources/Api';
import Categories from './Categories/Categories';
import Gameplay from './Gameplay/Gameplay';
import Scoreboard from './Scoreboard/Scoreboard';
import { LIST_OF_SCORES_KEY } from './common/StorageItems';

const routes = mount({
    "/": route({
        title: 'Start Page',
        view: <StartPage />
    }),
    "/categories": route({
        title: "Show Categories",
        view: <Categories />
    }),
    "/gameplay": route({
        title: "Gameplay",
        view: <Gameplay />
    }),
    "/scoreboard": route({
        title: "Scoreboard",
        view: <Scoreboard />
    }),

});

Api.init();

ReactDOM.render(
    <Router context={{scores: localStorage.getItem(LIST_OF_SCORES_KEY)}}routes={routes} />, 
    document.getElementById('root')
);