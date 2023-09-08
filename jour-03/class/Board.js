export class Board{
    constructor(){
        grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        hasWinner = false;
    }
}

export function initializeBoard(){
    grid = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ];

    hasWinner = false;
}

export function displayBoard(){
    console.log(grid[0]);
    console.log(grid[1]);
    console.log(grid[2]);
}

export class Row{
    constructor(){
    document.createElement("div");
    };
}

export class Case{
    constructor(){
    document.createElement("button");
    };
}
