const generateRandomArray = require('../util/sortTestHelper.js')


let arr = generateRandomArray(20000, 1, 12000)

/*
方法说明：希尔排序
@param  array 待排序数组
*/

//排序思路：希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。希尔排序是非稳定排序算法。
