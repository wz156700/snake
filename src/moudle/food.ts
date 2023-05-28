//定义食物类
export default class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("food")!; //加 ！表示这个元素不可能为null

    }

    // 定义获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft
    }

    // 定义获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop
    }

    // 改变food的位置
    change() {
        // food的位置为0-290之间整十的数,因为蛇移动是一格一格移动（即按照10为单位向前移动）
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}