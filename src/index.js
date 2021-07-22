import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import { massTest, completeBoard } from './board.js'

$(
    massTest(completeBoard)
);

// $(document).ready(function () {
// $('form#form').submit(()=>{
//     console.log("form submitted");
//     event.preventDefault();

// });
// });