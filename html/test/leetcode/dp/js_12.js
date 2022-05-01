function intToRoman(num) {
    let result = [];
    while (num > 9) {
        result.push(num % 10);
        num = Math.floor(num / 10);
    }
    result.push(num % 10);

    for (let i = 0; i < result.length; i++) {
        if (i === 0) {} else if (i === 1) {} else if (i === 2) {
            if (result[i] === 4) {
                console.log("CD");
            } else if (result[i] === 9) {
                console.log("CM");
            } else if (result[i] > 4) {
                result[i] = result[i] - 5;
            }
        } else if (i === 3) {
            for (let j = 0; j < result[i]; j++) {
                console.log("M");
            }
        }
    }
    return result;
}
//console.log(intToRoman(1234))
function longestCommonPrefix(strs) {
    let min_length = 200, //取得长度最小的值
        s_length = strs.length;

    for (let i = 0; i < s_length; i++) {
        min_length = Math.min(min_length, strs[i].length);
    }
    for (let i = 0; i < min_length; i++) {
        if (!longestP(strs, i)) {
            return strs[0].slice(0, i);
        }
    }
    return strs[0].slice(0, min_length);
}
//定义一个辅助函数，有来判断第strs里的每一项strs[i].charAt(n) 是否相同
function longestP(strs, n) {
    let s_length = strs.length,
        str_n = strs[0].charAt(n);
    for (let i = 0; i < s_length; i++) {
        if (str_n !== strs[i].charAt(n)) {
            return false;
        }
    }
    return true;
}
//console.log(longestCommonPrefix(["dog", "racecar", "dogcar"]));

function letterCombinations(digits) {
    const dict_leeer = [
        [],
        [],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"],
    ];
    let result = [""],
        temp = [];
    for (let i = 0; i < digits.length; i++) {
        charArray = dict_leeer[parseInt(digits.charAt(i))]; //找到这个字母对应的数组
        temp = result;
        console.log(charArray);
        result = [];
        for (let j = 0; j < charArray.length; j++) {
            for (let k = 0; k < temp.length; k++) {
                result.push(temp[k] + charArray[j]);
            }
        }
    }
    if (result.length === 1) {
        return [];
    }
    return result;
}
//console.log(letterCombinations('23'))

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function removeNthFromEnd(head, n) {
    let currentNode = head,
        tempNode = head;
    for (let i = 0; i < n; i++) {
        currentNode = currentNode.next;
    }
    if (!currentNode) {
        return head.next;
    }
    while (currentNode.next) {
        currentNode = currentNode.next;
        tempNode = tempNode.next;
    }
    tempNode.next = tempNode.next.next;
    console.log(tempNode);
    return head;
}
//定义一个函数，将数组转化为链表
function arrayToList(nums) {
    let node_head = new ListNode();
    if (nums.length > 0) {
        node_head.val = nums[0];
    } else {
        return new ListNode();
    }
    let currentNode = node_head;
    for (let i = 1; i < nums.length; i++) {
        currentNode.next = new ListNode(nums[i]);
        currentNode = currentNode.next;
    }
    currentNode = node_head;
    while (currentNode) {
        currentNode = currentNode.next;
    }
    return node_head;
}
//console.log(removeNthFromEnd(arrayToList([1]), 1));
function isValid(s) {
    let mapP = new Map(),
        setP = new Set(),
        result = [];
    setP.add(")").add("]").add("}");
    mapP.set("(", ")");
    mapP.set("[", "]");
    mapP.set("{", "}");
    for (let i = 0; i < s.length; i++) {
        ss = s.charAt(i);
        if (setP.has(ss)) {
            let r = result.pop();
            if (mapP.get(r) !== ss) {
                return false;
            }
        } else {
            result.push(ss);
        }
    }
    return result.length === 0;
}
//console.log(isValid("()[]{}"));
function mergeTwoList(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    let result = new ListNode(),
        curr1 = list1,
        curr2 = list2,
        temp = result;
    while (curr1 && curr2) {
        if (curr1.val < curr2.val) {
            temp.next = curr1;
            curr1 = curr1.next;
        } else {
            temp.next = curr2;
            curr2 = curr2.next;
        }
        temp = temp.next;
    }
    if (curr1) {
        temp.next = curr1;
    }
    if (curr2) {
        temp.next = curr2;
    }
    //  logList(result.next);
    return result.next;
}

function logList(head) {
    while (head) {
        console.log(head.val);
        head = head.next;
    }
}

//console.log(mergeTwoList(arrayToList([1, 3, 5]), arrayToList([1, 2, 4])))
// 对于n个括号对的组合，左括号的取值范围为(0-2n-1).首位不变，实质是对n-1个左括号在 1，2n-2 之间分布 即在 1,2n-2 之间选取n个数字，构成不同的组合
// 对于i个括号对的组合， 已有result[i-1]，对于resule[i-1]里的每一项，即result[i-1][j],获取最后一位值，在之后添加 j+1到2*i-2的数字
function generateParenthesis(n) {
    result = [
        [0]
    ];
    for (let i = 2; i <= n; i++) {
        temp = result;
        result = [];
        for (let j = 0; j < temp.length; j++) {
            // temp[j] 即为长度为i，里面第j项结果,对于第j项结果
            r_r = temp[j][temp[j].length - 1] + 1;
            for (let k = r_r; k <= 2 * i - 2; k++) {
                let temp1 = temp[j].slice();
                temp1.push(k);
                result.push(temp1);
            }
        }
    }
    res = [];
    for (let i = 0; i < result.length; i++) {
        res.push(arrayToParenthesee(result[i]));
    }
    return res;
}
//console.log(generateParenthesis(3))

function arrayToParenthesee(array_result) {
    let length = array_result.length, // 括号的总长度
        result = "(", //保存结果
        k = 1; //原数组的下标
    for (let i = 1; i < length * 2; i++) {
        if (k < length && i === array_result[k]) {
            k++;
            result = result + "(";
        } else {
            result = result + ")";
        }
    }
    return result;
}

//console.log(arrayToParenthesee([0, 2, 4]));
function swapPaires(head) {
    console.log(head);
    let pre = new ListNode();
    pre.next = head;
    pre2 = head.next;
    while (pre && pre2) {}
}

function countAndSay(n) {
    let result = "1";
    for (let i = 1; i < n; i++) {
        temp = result;
        result = countAndSayN(temp);
    }
    return result;
}

function countAndSayN(s) {
    result = "";
    result_a = []; //创建一个二维数组，用来保存result[i][1]  表示字母，result[i][0] 表示个数
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (
            result_a.length > 0 &&
            result_a[result_a.length - 1][1] === s.charAt(i)
        ) {
            result_a[result_a.length - 1][0] += 1;
        } else {
            result_a.push([1, s.charAt(i)]);
            j = j + 1;
        }
    }
    console.log(result_a);
    for (let j = 0; j < result_a.length; j++) {
        result = result + result_a[j][0] + result_a[j][1];
    }
    return result;
}
//console.log(countAndSay(4))
//console.log(swapPaires(arrayToList([1, 2, 3, 4])))

//对于result[i],创建值为result[i][0]表示从第一个跳到这里需要多少步，result[i][1],表示自身所能到达最远的距离。如果>=最后一个，则表示到达
function jumpGame2(nums) {
    n_length = nums.length;
    if (n_length === 1) {
        return 0;
    }
    result = new Array(n_length);
    result[0] = [0, nums[0]];
    for (let i = 1; i < n_length; i++) {
        for (j = 0; j < i; j++) {
            if (result[j][1] >= i) {
                if (result[j][1] >= n_length - 1) {
                    //位置j 能到达末尾，结束
                    console.log(result);
                    return result[j][0] + 1;
                } else {
                    result[i] = [result[j][0] + 1, i + nums[i]];
                    break;
                }
            }
        }
    }
}
//console.log(jumpGame([2, 0, 0]));

function jumpGame(nums) {
    let k = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (k === 0 && nums[i] === 0) {
            return false;
        } else if (nums[i] > k) {
            k = nums[i];
        }
        k = k - 1;
    }
    return true;
}
let r_Set = new Set();
let canR = false;
//某一点是否为0，为了方便计算，我们可以这个点出发，不断向左向右跳跃
function canReach(arr, start) {
    let nums_length = arr.length,
        target = 0;
    for (let i = 0; i < nums_length; i++) {
        if (arr[i] === 0) {
            target = i;
            break;
        }
    }
    canReachHelp(arr, start, target);
    return canR;
}

function canReachHelp(nums, start, result) {
    if (start === result) {
        console.log(nums, start, result);
        canR = true;
        return;
    }
    if (start >= 0 && start < nums.length) {
        if (!r_Set.has(start)) {
            r_Set.add(start);
            canReachHelp(nums, start - nums[start], result);
            canReachHelp(nums, start + nums[start], result);
        }
    }
    //return false
}

function rotateImage(matrix) {
    let size = matrix.length; //获取尺寸
    //对于matrix[i][j], 旋转之后的坐标为 if i<size,j<size  matrix[i][size-j]
}
//console.log(canReach([3, 0, 2, 1, 2], 2))
// 对于[1,2],在1的结果里将2依次插入
function premute(nums) {
    result = [
        [nums[0]]
    ];

    for (let i = 1; i < nums.length; i++) {
        temp = result;
        result = [];
        for (let j = 0; j < temp.length; j++) {
            t_temp = temp[j].length;
            for (let k = 0; k <= t_temp; k++) {
                te = temp[j].slice();
                te.splice(k, 0, nums[i]);
                result.push(te);
            }
        }
    }
    return result;
}
//console.log(premute([1, 2, 3]))
//尝试用动态规划解决这个问题。对于第i个房间，最大值为result[i-1](抢第i-1个房间)或者result[i-1]+nums[i]
function rob(nums) {
    n_length = nums.length;
    result = new Array(n_length);
    if (n_length === 1) {
        return nums[0];
    }
    if (n_length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    result[0] = nums[0];
    result[1] = Math.max(result[0], nums[1]);
    for (let i = 2; i < n_length; i++) {
        result[i] = Math.max(result[i - 1], nums[i] + result[i - 2]);
    }
    return result[n_length - 1];
}
//console.log(rob([2, 7, 9, 3, 1]));
//for (let i = 1; i < 100; i++) console.log(Math.random() * 3 + 39);
function marjorityElement(nums) {
    //消元法，即不同元素两两相消，剩下的就是出现超过n/2的数字
    let marjority = nums[0],
        count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            marjority = nums[i];
        }
        if (nums[i] === marjority) {
            count++;
        } else {
            count--;
        }
    }
    return marjority;
}

//console.log(marjorityElement([6, 5, 5]));
function convertToTitle(columnNumber) {
    columnNumber = columnNumber - 1;
    result = [];
    while (columnNumber > 26) {
        result.push(columnNumber % 26);
        columnNumber = Math.floor(columnNumber / 26);
    }
    result.unshift(columnNumber);
    result[result.length - 1]++;
    console.log(result);
    result_str = "";
    for (let i = 0; i < result.length; i++) {
        result_str = result_str + String.fromCharCode(64 + result[i]);
    }
    return result_str;
}
//console.log(convertToTitle(701));
function lengthofLastWord(s) {
    s_a = s.split(" ");
    s_l = s_a.length;
    for (let i = s_l - 1; i >= 0; i--) {
        if (s_a[i].length > 0) {
            return s_a[i].length;
        }
    }
}
//console.log(lengthofLastWord("luffy is still joyboy"));
function plusOne(digits) {
    d_l = digits.length;
    for (let i = d_l - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}
//console.log(plusOne([9, 9]));
//二分查找
function binarySearch(nums, target) {
    let head = 0,
        tail = nums.length - 1,
        curr;

    while (head <= tail) {
        if (nums[head] > target || nums[tail] < target) {
            return -1;
        }
        if (nums[tail] === target) {
            return tail;
        }
        curr = Math.floor((head + tail) / 2);
        if (nums[curr] < target && nums[curr + 1] > target) {
            return -1;
        }
        if (nums[curr] === target) {
            return curr;
        } else if (nums[curr] > target) {
            tail = curr;
        } else {
            head = curr;
        }
    }
    return -1;
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));