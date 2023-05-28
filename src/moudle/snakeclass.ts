// 定义蛇类
export default class Snake {
    //蛇容器
    snakeEle: HTMLElement
    // 蛇头
    head: HTMLElement
    // 蛇身(包括蛇头)
    body: HTMLCollection
    constructor() {
        this.snakeEle = document.getElementById("snake")!
        this.head = this.snakeEle.firstElementChild as HTMLElement
        this.body = this.snakeEle.getElementsByTagName("div")!
    }

    // 获取蛇头X坐标
    get X() {
        return this.head.offsetLeft
    }

    // 获取蛇头Y坐标
    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头X坐标
    set X(value: number) {
        if (this.X === value) {
            return
        }
        //撞墙
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了")
        }

        //处理掉头问题
        //判断是否掉头,蛇头的位置是否等于第二节身体的位置
        // 如果发生了掉头，让蛇往反方向继续移动
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft == value) {
            if (this.X > value) {

                value = this.X + 10
            } else {
                value = this.X - 10
            }
        }

        // 没撞墙
        this.moveBody();
        this.head.style.left = value + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody()

    }

    // 设置蛇头Y坐标
    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        //撞墙
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了")
        }

        //处理掉头问题
        //判断是否掉头,蛇头的位置是否等于第二节身体的位置
        // 如果发生了掉头，让蛇往反方向继续移动
        if (this.body[1] && (this.body[1] as HTMLElement).offsetTop == value) {
            if (this.Y > value) {
                value = this.Y + 10
            } else {
                value = this.Y - 10
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody()

    }

    // 蛇增加身体
    add() {
        const newELe = document.createElement("div");
        this.snakeEle.insertAdjacentElement("beforeend", newELe)
    }

    // 移动蛇身体
    moveBody() {

        // 将后边身体设置为前边身体的位置
        for (let i = this.body.length - 1; i > 0; i--) {
            //获取前边身体的位置
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;
            //将该值设置到当前身体上
            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 判断蛇是否与自身发生碰撞
    checkHeadBody() {
        for (let i = 1; i < this.body.length; i++) {
            let bd = (this.body[i] as HTMLElement)
            if (this.X == bd.offsetLeft && this.Y == bd.offsetTop) {
                // 进入判断，说明蛇头撞到了身体,游戏结束
                throw new Error("撞到自己了");
            }
        }
    }
}