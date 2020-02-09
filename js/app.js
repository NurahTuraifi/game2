var Enemy = function( x , y , speed  ) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    
};

Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt + 2;
    if (this.x >= 500) {
        this.x = 0;
        this.speed = generateSpeed();
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


 
function generateSpeed() {
    return Math.floor(Math.random() * (100 - 50)  +51);
}
const allEnmies = [];
for (i of [1,2,3]){
    const enemy = new Enemy( 0 , 70 *i , generateSpeed() );
    allEnmies.push(enemy);
}
class Player {
    constructor(x , y ) {
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
    }
    update() {}
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(keys) {
      
        switch (keys) {
            case 'up':
                this.y -= 50;

            if (this.y < -10) {
                this.y =440;
            }
            break;
            case 'down':
                this.y += 50;
                if (this.y >= 440){
                    this.y = 440;
                }
            break;
            case 'right':
                this.x += 50;
            if (this.x >= 440){
                this.x = 440;
            }
            break;
            case 'left':
                this.x -= 50;
                break;
                default:
                    null;
        }
    }
}

let player = new Player(200, 440);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
