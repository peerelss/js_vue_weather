function stair(n) {
    if (n < 2) {
        return 1
    }
    let result = new Array(n + 1);
    result[0] = 1
    result[1] = 1
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result[n]
}
/*
对于 某一点(i,j)，距离最近的路径为min((i,j-1)+way[i][j-1],(i-1,j)+way[i-1][j])
**/
function findTheEasiestWay64(grid) {
    if (Array.isArray(grid) && grid.length > 0 && Array.isArray(grid[0]) && grid[0].length > 0) {
        let g_i = grid.length,
            g_j = grid[0].length;
        for (let i = 0; i < g_i; i++) {
            for (let j = 0; j < g_j; j++) {
                if (i === 0) {
                    if (j > 0) {
                        grid[i][j] = grid[i][j] + grid[i][j - 1];
                    }
                } else if (j === 0) {
                    if (i > 0) {
                        grid[i][j] = grid[i][j] + grid[i - 1][j];
                    }
                } else {
                    grid[i][j] = Math.min(
                        grid[i][j] + grid[i - 1][j], grid[i][j] + grid[i][j - 1]
                    );
                }

            }
        }
        return (grid[g_i - 1][g_j - 1]);
    } else {
        return 0
    }



}
//  对于 
function funiquePath(m, n) {
    if (m > 1 && n > 1) {
        let res = new Array(m).fill(new Array(n).fill(1));
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                res[i][j] = res[i - 1][j] + res[i][j - 1]
            }
        }
        return res[m - 1][n - 1]
    } else {
        return 1
    }

}
// 去除所有重复的数字 26,双指针
function removeDuplicates(nums) {
    let n_length = nums.length
    if (n_length < 2) {
        return nums
    }
    let pre = 0,
        next = 1
    for (let i = 1; i < n_length; i++) {
        if (nums[pre] !== nums[i]) {
            nums[pre + 1] = nums[i]
            pre += 1
        }
    }
    return nums
}
// 从最后以一个数字开始比较，如果比前数小，则跳过，直至第一位。
// 如果比前数大，则可以开始计算下一个数字。 对于第 i位数字，大于 i-1位数字。将nums[i-1]与num[i]到nums[nums.length-1]之间的仅大于nums[i-1]的赋值为nums[i-1].相当于进位
// 进位之后，剩下的数组重新排列（将剩下数字两两交换）
function nextPreNums() {

}
/*
 动态规划解决这个问题 对于每一个位置，所能承接的雨水是左边最大值和右边最大值中较小者减去自身的高度，故只需要对每一个柱子取左边最大值和右边最大值即可
**/


function divingBorad(shorter, longer, k) {
    if (shorter === longer) {
        return [shorter * k]
    } else {
        result = []
        for (let i = 0; i <= k; i++) {
            result.push(shorter * i + longer * (k - i))
        }
        return result
    }
}
//如果能够被连续x个正整数相加，则说明 n- sum(0-(x-1)) 能够被x整除.x取值为(1-根号n)
function numberSum(n) {
    result = []
    result.push(n)
    for (let i = 2; i <= n; i++) {
        if ((n - ((i - 1) * i) / 2) > 0 && (n - ((i - 1) * i) / 2) % i === 0) {
            let r = (n - ((i - 1) * i) / 2) / i;
            console.log(r);
            let rr = [];
            for (let j = 0; j < i; j++) {
                rr.push(r + j);
            }
            result.push(rr);
        }
    }
    return result
}
/*
最小加油次数，首先计算是否能够达到目的地

**/
function minRefuelStops(target, startFuel, stations) {
    let lastFuel = []; //计算到达每个加油站之后（加油或者不加油之后剩余的油量）
    stations = stations.unshift([0, startFuel]).push([target, 0]);
    for (let i = 1; i < stations.length; i++) {
        if (stations[i][0] - stations[i - 1][0] > lastFuel[i - 1]) {
            //无法到达这个加油站，返回-1
            return -1;
        } else {
            //加油，计算剩余加完油剩余油量 此时是每一站都加了油。整个过程每一站剩余油量都保存在 lastFuel数组中
            lastFuel[i] =
                lastFuel[i - 1] -
                (stations[i][0] - stations[i - 1][0]) +
                stations[i][1];
        }
    }
    //对于某一站，如果可以不加油（stations[i][0]）既要求从这一站之后每一站lastFuel[i]-stations[i][0]>=0.要求尽量多不加油，那么要针对 stations[i][0] 最小的开始计算。
    //如果可行，则针对下一个 继续这么计算。如果不可行，在 last[j]-stations[i][0]处<0. 则从 第j处开始重复上述过程

}
// 三数之和 
function threeSum(nums) {
    nums = nums.sort((a, b) => { a - b })
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        k = nums.length - 1
        while (nums[j] + nums[k] !== 0 - nums[i]) {
            if (j + 1 === k) {
                break
            }
            if (nums[k] + nums[j] > 0 - nums[i]) {
                k++
            } else {

            }
        }
    }
}
// 递归调用，返回
function flatArray(nums, result) {
    for (let i = 0; i < nums.length; i++) {
        if (Array.isArray(nums[i])) {
            flatArray(nums[i], result)
        } else {
            result.push(nums[i])
        }
    }
    return result
}
//leetcode 2
function addTwoNumbers(l1, l2) {
    result_l = Math.max(l1.length, l2.length)
    if (result_l === 0) {
        return []
    }
    l1_r = result_l - l1.length
    for (let i = 0; i < l1_r; i++) {
        l1.push(0)
    }
    l2_r = result_l - l2.length
    for (let i = 0; i < l2_r; i++) {
        l2.push(0);
    }
    result = []
    for (let i = 0; i < result_l + 1; i++) {
        result.push(0)
    }
    for (let i = 0; i < result_l; i++) {
        if (l1[i] + l2[i] + result[i] > 9) {
            result[i] = l1[i] + l2[i] - 9;
            result[i + 1] = 1
        } else {
            result[i] = l1[i] + l2[i] + result[i];
        }
    }
    if (result[result_l] === 0) {
        result.pop();
    }
    return result
}

function lengthOfLongestSubstring(s) {
    let result = 0,
        mapRe = new Map(),
        current = -1 //标记与 s.charAt(i) 重复字母的左边最近的位置
    for (let i = 0; i < s.length; i++) {
        let ss = s.charAt(i);
        if (mapRe.has(ss)) {
            current = Math.max(current, mapRe.get(ss))
            result = Math.max(result, i - current)
            mapRe.set(ss, i);
        } else {
            result = Math.max(result, i - current);
            mapRe.set(ss, i)
        }
    }

    console.log(result)
    return mapRe
}
//console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));   pwwkespw
//
function longestPalindrome(s) {
    let begin = 0,
        end = 0
    for (let i = 0; i < s.length; i++) {
        //奇数扩展
        let j = 0
        while (i - j >= 0 && i + j < s.length && s.charAt(i - j) === s.charAt(i + j)) {
            if (i + j + 1 - (i - j) > (end - begin)) {
                end = i + j + 1
                begin = i - j
            }
            j++;
        }
        //偶数扩展-与右边相等
        j = 0
        while (i - j >= 0 && i + 1 + j < s.length && s.charAt(i - j) === s.charAt(i + j + 1)) {
            if (i + j + 2 - (i - j) > end - begin) {
                end = i + j + 2;
                begin = i - j;
            }
            j++;
        }

    }
    return (s.slice(begin, end));
}
//console.log(longestPalindrome("cbbcd"));
function convert_6(s, numRows) {
    if (numRows === 1) { return s }
    let result = []
    for (let i = 0; i < numRows; i++) {
        result.push([])
    }
    for (let i = 0; i < s.length; i++) {
        let j = i % (numRows * 2 - 2) //确定在这个循环里的位置。 对于 之 字形排序，循环的长度为 numRows*2-2
            //let k = Math.floor(i / numRows) //确定在第几个循环里
        if (j < numRows) {
            result[j].push(s.charAt(i))
        } else {
            result[2 * numRows - j - 2].push(s.charAt(i))
        }
    }
    let r = []
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < result[i].length; j++) {
            r.push(result[i][j])
        }
    }
    return r;
}
//console.log(convert_6("PAYPALISHIRING", 3));
//console.log(flatArray([1, [2, [
//    [3, 4], 5
//], 6]], []));
function isPalindrome(x) {
    if (x < 0) {
        return false
    }
    let result = []
    while (x > 9) {
        result.push(x % 10)
        x = Math.floor(x / 10)
    }
    result.push(x % 10)
    console.log(result)
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== result[result.length - 1 - i]) {
            return false
        }
    }
    return true
}

function reverse_7(x) {
    let r_x = x
    if (x < 0) {
        r_x = 0 - x;
    }
    let result = []
    while (r_x > 9) {
        result.push(r_x % 10);
        r_x = Math.floor(r_x / 10);
    }
    result.push(r_x % 10);
    let rr = 0
    for (let i = 0; i < result.length; i++) {
        rr = rr * 10 + result[i]
    }
    if (x < 0) {
        rr = 0 - rr
    }
    if (rr > 2 ** 31 - 1 || rr < 0 - 2 ** 31) {
        rr = 0
    }
    return rr
}
//console.log(reverse_7(1534236469));
//console.log(isPalindrome(10))
//动态规划
function lengthOfLIS(nums) {
    let result = new Array(nums.length)
    result[0] = 1
    for (let i = 1; i < nums.length; i++) {
        let max_i = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                max_i = Math.max(max_i, result[j] + 1)
            }
        }
        result[i] = max_i
    }
    let max = 0
    for (i = 0; i < result.length; i++) {
        max = Math.max(max, result[i])
    }
    return max
}
//阿拉伯数字转罗马数字
function intToRoman(num) {
    let result = [];
    while (num > 9) {
        result.push(num % 10);
        num = Math.floor(num / 10);
    }
    result.push(num % 10);
    console.log(result);
}
console.log(intToRoman(1234))