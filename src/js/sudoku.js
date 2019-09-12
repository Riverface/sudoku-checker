export function GameBoard(rs) {
    this.rows = [];
    this.totalrows = 9;
    this.rs = rs;
    this.checkarray = [];
    this.workingarray=[];
}
GameBoard.prototype.Init = function () {
    this.Assemble();
    this.Filler();
    this.Print();
}
GameBoard.prototype.Filler = function () {
    var gb = this;
    gb.rs.split(' ').forEach(function (c, ci) {
        c.split('').forEach(function (e, ei) {
            gb.rows[ci][ei] = e;
        });
    });
}

GameBoard.prototype.Assemble = function () {
    var currboard = this;
    var spots = [];
    for (var o = 0; o < currboard.totalrows; o++) {
        for (var celly = 0; celly < currboard.totalrows; celly++) {
            spots.push(0);
        }
        currboard.rows.push(spots);
        spots = [];
    }
}
GameBoard.prototype.Print = function () {
    var currboard = this;
    currboard.printer = "";
    currboard.rows.forEach(function (i) {
        currboard.printer += "<div class='cell'>";
        i.forEach(function (i2, e) {
            currboard.printer += "<div id='c" + e + "s" + i2 + "' class='spot'>";
            if (i2 == 0) {
                currboard.printer += " " + "</div>"
            } else {
                currboard.printer += i2 + "</div>" + "</div>";
            }
        });
        currboard.printer += "</div></div>";
    });
    currboard.printer += "";
    return currboard.printer;
}
GameBoard.prototype.AddButtons = function () {

}
GameBoard.prototype.CellCheck = function () {
    var gb = this;
    var result= [];
    for (var i = 0; i <= 6; i += 3) {

        for (var j = 0; j <= 6; j += 3) {
            gb.workingarray = [];
            for (var x = i; x < i + 3; x++) {
                for (var y = j; y < j + 3; y++) {
                    gb.workingarray.push(gb.rows[y][y]);

                }
            }
        }   
        result = gb.Checker(gb.workingarray);


    }

    return result;
}

GameBoard.prototype.Checkrow = function () {
    var gb = this;
    var result= [];
    for (var cR = 0; cR < 9; cR++){

        gb.workingarray = [];
        for (var cS = 0; cS < 9; cS++) {
            gb.workingarray.push(gb.rows[cR][cS]);
        }
    }
    result = gb.Checker(gb.workingarray);
    return result;
}

GameBoard.prototype.CheckCol = function () {
    var gb = this;
    var result = [];
    for (var cR = 0; cR < 9; cR++)
    {

        gb.workingarray = [];
        for (var cS = 0; cS < 9; cS++) {
            
            gb.workingarray.push(gb.rows[cS][cR]);
        }
        result = gb.Checker(gb.workingarray);
        }
    return result;
}
GameBoard.prototype.Checker = function (numbers) {
    var gb = this;
    //in order: valid, full
    var checks = [true, true];


    if (checks[1]) {

        numbers.forEach(function (cc) {
            switch (cc) {
                case 0:
                    gb.checkarray[0]++;
                    checks[1] = false;
                    break;
                case 1:
                    gb.checkarray[1]++;
                    break;
                case 2:
                    gb.checkarray[2]++;
                    break;
                case 3:
                    gb.checkarray[3]++;
                    break;
                case 4:
                    gb.checkarray[4]++;
                    break;
                case 5:
                    gb.checkarray[5]++;
                    break;
                case 6:
                    gb.checkarray[6]++;
                    break;
                case 7:
                    gb.checkarray[7]++;
                    break;
                case 8:
                    gb.checkarray[8]++;
                    break;
                case 9:
                    gb.checkarray[9]++;
                    break;
            }
        });
                gb.checkarray.forEach(function (check) {
    
                    if (checks[1]) {
                        if (check > 1) {
                         console.log(check);
                            checks[0] = false;
                        }
                    }

        });
    }
    else{
        checks[1] = false;
    }
    return checks;
}