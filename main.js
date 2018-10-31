///////////task 1 ////////////////////

const setRep = (arr) => {
    let array = arr;

    function getMinIndex(arr) {
        let min = 0;
        for (let i = 1; i < arr.length; i++) {
            arr[i] > arr[ min ] ? min = i : false;
        }
        return { indexMin: min, minEl: arr[ min ] };
    }

    function getMaxIndex(arr) {
        let max = 0;
        for (let i = 1; i < arr.length; i++)  {
            arr[i] > arr[ max ] ? max = i : false;
        }
        return { indexMax: max, maxEl: arr[ max ] };
    }

    const arrSum = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Number(arr[i])) {
                sum += arr[i];
            }
        }
        return sum;
    };

    function replaceArrMinAndMax(arr, a, b) {
        let tmp  = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    const min = getMinIndex(array);
    const max = getMaxIndex(array);
    replaceArrMinAndMax(arr, min.indexMin, max.indexMax);
    const sum = arrSum(array);

    return { replaceArr: array, min: min.minEl, max: max.maxEl, sum: sum };
};

let Array  = [ -5, 10, 5, undefined, 5, NaN, 5, -3333.421, 321324 ];
const calc = (arr) => {
    const obj = setRep(arr);
    console.log(JSON.stringify(obj, null, 4));
};
calc(Array);

/////////// task 2 /////////////////

let arr2    = [ 1, -2, 5, -6 ];
const calc2 = (arr) => {
    const sum    = arr.reduce((a, b) => a + b);
    let max      = 0;
    let maxIndex = 0;
    arr.forEach((elem, index) => {
        if (max < elem) {
            maxIndex = index;
            max      = elem;
        }
    });

    let min      = 0;
    let minIndex = 0;
    arr.forEach((elem, index) => {
        if (min > elem) {
            minIndex = index;
            min      = elem;
        }
    });

    let newArr = Object.assign([], arr, { [minIndex]: arr[maxIndex], [maxIndex]: arr[minIndex] });

    return console.log({ sum, max, min, oldArr: arr, newArr });

};
calc2(arr2);

///////// task 3 /////////////

const square = function (x) {
    return x * x;
};
const arr    = [ 1, 2, 3, 4 ];

function map(fn, arr) {
    let mas = [];
    for (let i = 0; i < arr.length; i++) {
        mas[i] = fn(arr[i]);
    }

    return mas;
};

console.log(map(square, arr));

/////// task 4 //////////

const arrInObj = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i;
    }
    return obj;
};
arrInObj(arr);
