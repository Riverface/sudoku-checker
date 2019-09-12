import $ from "jquery";
import "bootstrap";
import {GameBoard, Cell} from './sudoku.js';
import './../styles.css';
$(document).ready(function() {
var board = new GameBoard();
board.Assemble();
board.Print();

console.log(board.printer);
$("#gboard").html(board.printer);
console.log("butt");
//             $(".jumbotron").click(function(){
// });

});
