'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './App.js';

// get the data from the window object
const quiz = window.quiz;


render(
    <App quiz={quiz} />
    , document.getElementById('app-root')
);