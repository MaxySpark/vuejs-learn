new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRnning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.gameIsRnning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {  
            var damage = this.calcualteDamage(3,10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if(this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        specialAttack: function() {
            var damage = this.calcualteDamage(10,20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            });
            if(this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        heal: function() {
            if(this.playerHealth<=90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: false,
                text: 'Player heals for 10'
            });
            this.monsterAttack();
        },
        giveUp: function() {
            if(confirm('Give Up! New Game?')) {
                this.startGame();
            }
        },
        calcualteDamage: function(min,max) {
            return Math.max(Math.floor(Math.random() * max) + 1 ,min);
        },
        checkWin: function() {
            if(this.monsterHealth<=0) {
                if(confirm('You Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRnning = false;
                }
                return true;
            } else if(this.playerHealth<=0) {
                if(confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRnning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttack: function() {
            var damage = this.calcualteDamage(5,12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
            this.checkWin();
        }
    }
});