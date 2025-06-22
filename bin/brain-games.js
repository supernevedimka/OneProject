#!/usr/bin/env node

import {greetUser,processMenuChoice} from "../src/helpers.js";
import runBrainEven  from '../src/games/even-game.js';
import runBrainCalc  from '../src/games/calc-game.js';
import runBrainGcd  from '../src/games/gcd-game.js';
import runBrainPrime  from '../src/games/prime-game.js';
import runBrainProgreesion  from '../src/games/progression-game.js';

const userName = greetUser();

processMenuChoice(runBrainCalc,runBrainEven,runBrainGcd,runBrainPrime,runBrainProgreesion,userName)