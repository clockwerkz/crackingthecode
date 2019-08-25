function spiral(n) {
    const dir = {
        RIGHT: 'RIGHT',
        DOWN: 'DOWN',
        LEFT: 'LEFT',
        UP: 'UP'
    }
    currentDir = dir.RIGHT;
    let [x,y] = [0,0];
    const bounds = {
        right: n-1,
        down: n-1,
        left: 0,
        up: 0
    }
    currentDir = dir.RIGHT;
    const arr = new Array(n);
    for (let i=0; i<n; i++) arr[i] = new Array(n);
    const symbol = ['0','*'];
    let symbolIndex = 0;
    for (i=0; i<n*n; i++) {
        switch (currentDir) {
            case dir.RIGHT:
                arr[x][y++] = symbol[symbolIndex % 2];
                if (y>=bounds.right) {
                    currentDir = dir.DOWN;
                    bounds.up += 1;
                }
                break;
            case dir.DOWN:
                arr[x++][y] = symbol[symbolIndex % 2];
                if (x>=bounds.down) {
                    currentDir = dir.LEFT;
                    bounds.right -= 1;
                }
                break;
            case dir.LEFT:
                arr[x][y--] = symbol[symbolIndex % 2];
                if (y<=bounds.left) {
                    currentDir = dir.UP;
                    bounds.down -= 1;
                }
                break;
            case dir.UP:
                if(i === (n*n)-1 && n % 2 === 0) symbolIndex++;
                arr[x--][y] = symbol[symbolIndex % 2];
                if (x<=bounds.up) {
                    currentDir = dir.RIGHT;
                    symbolIndex++;
                    bounds.left += 1;
                }
                break;
        }
    }
    return arr;
}

console.log(spiral(10));