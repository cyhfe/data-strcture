// 冒泡排序
// 内循环： 逐个比较大小， 交换位置
// 外循环： 每次外循环都将最大的树移至末尾

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array, a, b) {
  return ([array[a], array[b]] = [array[b], array[a]]);
}

function createNonSortedArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}
// let array = createNonSortedArray(5);
// console.log(array);
// array = bubbleSort(array);
// console.log(array);

// 选择排序
// 找到最小值放第一项， 依次类推
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }
  return array;
}

let array = createNonSortedArray(5);
// console.log(array);
array = selectionSort(array);
// console.log(array);

function insertionSort() {
  return;
}
