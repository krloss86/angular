function find_max(nums) {
    var max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num > max_num) {
            // (Fill in the missing line here)
            max_num = num;
        }
    }
    return max_num;
}
console.log(find_max([-10, 10, 100]));
