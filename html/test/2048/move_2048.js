 class move_2048 {
     // arr表示数组，dir表示方向
     constructor(arr, dir) {
         this.arr = arr
         this.dir = dir
     }
     moveDown() {
         let score = 0
         this.clearZero()
         console.log(this.arr)
         for (let i = 0; i < this.arr.length - 1; i++) {
             if (this.arr[i] === this.arr[i + 1]) {
                 this.arr[i + 1] = this.arr[i + 1] * 2
                 score = this.arr[i + 1]
                 this.arr.splice(i, 1)
             }
         }

         if (this.dir) {
             for (let i = 4 - this.arr.length; i > 0; i--) {
                 this.arr.unshift(0)
             }
         } else {
             for (let i = 4 - this.arr.length; i > 0; i--) {
                 this.arr.push(0)
             }
         }
         this.arr.push(score)
         return this.arr
     }
     clearZero() {
         this.arr = this.arr.filter(ar => ar != 0)
     }
 }
 class Item_2048 {
     constructor(number) {

         this.number = number
         if (number === 0) { this.css_index = 'color_0' } else {
             this.css_index = "color_" + Math.log2(number)
         }
     }
 }
 console.log(new move_2048([4, 4, 2, 4], false).moveDown())