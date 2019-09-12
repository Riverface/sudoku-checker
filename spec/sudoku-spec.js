import {
    GameBoard
} from "../src/js/sudoku";

describe("Sukodu", function () {
    var sampleboards = [
        "003020600 900305001 001806400 008102900 700000008 006708200 002609500 800203009 005010300",
        "534678912 672195348 198342567 859761423 426853791 713924856 961537284 287411635 345286179"
    ];

    var gboard = new GameBoard(sampleboards[1]);


    gboard.Init();

    it("Each Cell is filled", function () {
        expect(gboard.CellCheck()[1]).toBe(true);
    });
    it("Each Cell has one of each number!", function () {
        expect(gboard.CellCheck()[0]).toBe(true);
    });
    it("Each Row is filled", function () {
        expect(gboard.Checkrow()[1]).toBe(true);
    });
    it("Each row has one of each number!", function () {
        expect(gboard.Checkrow()[0]).toBe(true);
    });
    it("Each Column is filled", function () {
        expect(gboard.CheckCol()[1]).toBe(true);
    });
    it("Each column has one of each number!", function () {
        expect(gboard.CheckCol()[0]).toBe(true);
    });
});