class Item_Mines {
    constructor(isMine) {
        this.isMine = isMine
        this.number = 0
        this.ifFlag = false
    }
}

function createRandomMines() {
    result = new Array(10)
    let i = 0
    while (i < 10) {
        let r_random = Math.floor(Math.random() * 81)
        if (result.indexOf(r_random) === -1) {
            result[i] = r_random
            i = i + 1
        }
    }
    return [41, 50, 42, 5, 9, 44, 52, 13, 72, 37];
}
//console.log(createRandomMines())
/**
 * 定义一个类，来表示这个元素。元素有几种呈现 
 * 1 雷 （被标记，或者未被标记）
 * 2 数字 0-8
 * 3，未点开，则覆盖为蓝色。
 ***/