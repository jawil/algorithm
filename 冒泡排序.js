// 第一轮是对n-1的位置定位
// 第二轮是 每一个位置的数的 确定
var arr = [1, 4, 5, 6, 99, 111, 112, 113, 133],
    temp = 0,
    flag = false;
for (var i = 0; i < arr.length - 1; i++) {
    document.writeln('come');
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            flag = true;
        }
    }
    if (flag) {
        flag = false;
    } else {
        break;
    }
}
for (var i = 0; i < arr.length; i++) {
    document.writeln(arr[i]);
};
