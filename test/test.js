var course = [
    { id: 1, name: 'Ha1', money: '10$', discound: '10%', lol: 'lol' },
    { id: 2, name: 'Ha2', money: '20$', discound: '20%', lol: 'lol' },
    { id: 3, name: 'Ha3', money: '30$', discound: '30%', lol: 'lol' },
    { id: 4, name: 'Ha4', money: '40$', discound: '40%', lol: 'lol' },
    { id: 5, name: 'Ha5', money: '50$', discound: '50%', lol: 'lol' },
    { id: 6, name: 'Ha6', money: '60$', discound: '60%', lol: 'lol' },
];

var ha = course.map(
    (self) => {
        let convertVI = self.money.slice(0, self.money.length - 1);
        return {
            id: self.id,
            name: `khoas hocj ${self.name}`,
            money: Number(convertVI) * 23000,
            discound: self.discound,
            codeDiscound: Math.floor(Math.random() * 100),
        }
    }
);

ha.forEach(
    (self) => {
        console.log(self)
    }
)

function swap(array, a, b) {
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

function selectionSort(array) {
    let min;
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[min]) {
                min = j
            }
        }
        swap(array, i, min)
    }
    return array
}

function bubbleSort(array) {
    let swapped
    do {
        swapped = false
        for (let i = 1; i < array.length; i++) {
            if (array[i] > array[i - 1]) {
                swap(array, i, i - 1)
                swapped = true
            }
        }
    } while (swapped);
    return array
}

function insertionSort(array) {
    let i, pos, x
    for (i = 0; i < array.length; i++) {
        pos = i
        x = array[i]
        while (pos > 0 && array[pos - 1] < x) {
            array[pos] = array[pos - 1]
            pos--
        }
        array[pos] = x
    }
    return array
}

function insertChange(array) {
    let i, j
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                swap(array, i, j)
            }
        }
    }
    return array
}

function mergeSort(array) {
    var merge1 = [array[0]]
    var merge2 = [array[1]]

    return array
}

var random1 = [1298, 4218, 312, -55643]
var random2 = [1298, 4218, 312, -55643]
var random3 = [1298, 4218, 312, -55643]
var random4 = [1298, 4218, 312, -55643]
var random5 = [1298, 4218, 312, -55643]

console.log(
    insertionSort(random1)
)

console.log(
    bubbleSort(random2)
)

console.log(
    selectionSort(random3)
)

console.log(
    insertChange(random4)
)

console.log(
    mergeSort(random5)
)

