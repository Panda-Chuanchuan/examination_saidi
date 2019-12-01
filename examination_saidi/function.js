function CISDI_JS() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    let _args = Array.prototype.slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    let _adder = function() {
        _args.push(...arguments);
        return _adder;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}
CISDI_JS (0).toString() //输出0
CISDI_JS (0)(1).toString() //输出1 
CISDI_JS (0)(1)(2).toString() //输出3
let v = CISDI_JS (0)(1);
v(2).toString() //输出3

