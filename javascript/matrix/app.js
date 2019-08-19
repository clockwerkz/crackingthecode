console.log('Matrix');

//Write a function that accepts an integer N
//and returns a NxN spiral matrix.

//Examples
//matrix(2)
//[[1, 2],
// [4, 3]]

//matrix(4)
//[[1, 2, 3, 4],
//[12,13,14, 5],
//[11,16,15, 6],
//[10, 9, 8, 7]]

const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const UP = 'UP';
const DOWN = 'DOWN';

function matrix(n) {
    const bound = {
        [LEFT] : 0,
        [RIGHT] : n-1,
        [DOWN] : n-1,
        [UP] : 0
    }
    console.log(bound);
    let count = 1;
    let x = 0;
    let y = 0;
    let direction = RIGHT;
    let arr = new Array(n);
    for (let i=0; i<n; i++) arr[i] = new Array(n);
    while (count<=n*n) {
        switch(direction) {
            case RIGHT: 
                arr[x][y++] = count++;
                if (y >= bound[RIGHT]) {
                    direction = DOWN;
                    bound[UP] += 1;
                } 
                break;
            case DOWN:
                arr[x++][y] = count++;
                if (x >= bound[DOWN]) {
                    direction = LEFT; 
                    bound[RIGHT] -= 1;
                }
                break;
            case LEFT: 
                arr[x][y--] = count++;
                if (y <= bound[LEFT]) {
                    direction = UP;
                    bound[DOWN] -= 1;
                } 
                break;
            case UP:
                arr[x--][y] = count++;
                if (x <= bound[UP]) {
                    direction = RIGHT; 
                    bound[LEFT] += 1;
                }
                break;
        }
    }
    console.log(arr);
}

// function matrix(n) {
//     let arr = new Array(n);
//     for (let i=0; i<n; i++) arr[i] = new Array(n);
//     let direction = "right down left up".split(' ');
//     let directionIndex = 0;
//     let i = 0;
//     let j = 0;
//     let val = 1;
//     while (val <= (n*n)) {
//       switch (direction[directionIndex%4]) {
//         case 'right':
//           arr[i][j++]=val++;
//           if ((j>=n-1) || (arr[i][j+1])) directionIndex++; 
//           break;
//         case 'down':
//           arr[i++][j] = val++;
//           if ((i>=n-1) || (arr[i+1][j])) directionIndex++;
//           break;
//         case 'left':
//           arr[i][j--] = val++;
//           if ((j<=0) || (arr[i][j-1])) directionIndex++;
//           break;
//         case 'up':
//           arr[i--][j] = val++;
//           if ((i<=0) || (arr[i-1][j])) directionIndex++;
//           break;
//       }
//     }
//     return arr;
//   }