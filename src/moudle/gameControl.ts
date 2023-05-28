//引入其他类
import Snake from "./snakeclass";
import Panel from "./panel";
import Food from "./food";

//游戏控制器
export default class GameControl {
    // 定义三个属性
    snake: Snake;
    food: Food;
    panel: Panel;

    direction: string = ''

    speedUnit: number
    isLive: Boolean = true

    constructor(speed: number = 10) {
        // 蛇
        this.snake = new Snake();
        // 食物
        this.food = new Food();

        // 记分牌
        this.panel = new Panel();

        this.speedUnit = speed

        this.initFn();
    }

    initFn() {
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        this.run();
    }

    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }

    // 控制蛇移动
    run() {
        //获取蛇头现在的位置
        let x = this.snake.X
        let y = this.snake.Y
        // 根据方向移动蛇
        switch (this.direction) {
            case 'ArrowUp':
                y -= this.speedUnit;
                break;
            case "Up":
                y -= this.speedUnit
                break;
            case 'ArrowDown':
                y += this.speedUnit
                break;
            case "Down":
                y += this.speedUnit
                break;
            case 'ArrowLeft':
                x -= this.speedUnit
                break;
            case "Left":
                x -= this.speedUnit
                break;
            case 'ArrowRight':
                x += this.speedUnit
                break;
            case "Right":
                x += this.speedUnit
                break;
            default: break;
        }
        try {
            this.snake.X = x
            this.snake.Y = y
            // 判断是否吃到食物
            this.checkEat(x, y);

        } catch (error) {
            this.isLive = false;
            alert("游戏结束！");
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.panel.level - 1) * 30)
    }

    // 检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y == this.food.Y) {
            // 改变食物位置
            this.food.change()
            // 增加分数
            this.panel.change()
            //增加蛇
            this.snake.add()
        }
    }
}
