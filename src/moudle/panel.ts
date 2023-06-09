// 定义积分排类
export default class Panel {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;

    constructor(maxLevel: number = 10) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel
    }


    change() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.level < this.maxLevel && this.score % 10 == 0) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}