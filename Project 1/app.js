new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        log: [],
        health: {
            'player': 100,
            'monster': 100
        }
    },
    methods: {
        attack: function() {
            let damageToPlayer = this.calculateDamage(5, 15);
            this.health.player -= damageToPlayer;
            if (this.checkWin()) {
                return;
            }

            let damageToMonster = this.calculateDamage(3, 12);
            this.health.monster -= damageToMonster;
            this.checkWin();

            this.log.unshift({
                attacker: 'monster',
                defender: 'player',
                damage: damageToMonster
            })
            this.log.unshift({
                attacker: 'player',
                defender: 'monster',
                damage: damageToPlayer
            })
        },
        specialAttack: function() {
            this.health.player -= this.calculateDamage(5, 30);
            if (this.checkWin()) {
                return;
            }

            this.health.monster -= this.calculateDamage(5, 25);
            this.checkWin();

            this.log.unshift({
                attacker: 'monster',
                defender: 'player',
                damage: damageToMonster
            })
            this.log.unshift({
                attacker: 'player',
                defender: 'monster',
                damage: damageToPlayer
            })
        },
        giveUp: function() {
            this.gameStarted = false;
        },
        heal: function() {
            if (this.health.player > 90){
                this.health.player = 100;
            } else {
                let damageToHeal = Math.floor(Math.random() * 15) + 1;
            }
            this.health.player = this.health.player + damageToHeal - this.calculateDamage(5, 15);

            this.log.push({
                attacker: 'monster',
                defender: 'player',
                damage: damageToPlayer,
                action: 'attack'
            })
            this.log.push({
                attacker: 'player',
                defender: null,
                damage: damageToHeal,
                action: 'heal'
            })
        },
        newGame: function() {
            this.gameStarted = true;
            this.health.player = 100;
            this.health.monster = 100;
            this.log = [];
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.health.player <= 0){
                if (confirm('You died :( New game?')){
                    this.newGame();
                } else {
                    this.gameStarted = false;
                }
                return true;
            } else if (this.health.monster <= 0){
                if (confirm('You win! New Game?')){
                    this.newGame()
                } else {
                    this.gameStarted = false;
                }
                return true;
            }
            return false;
        }
    },
    // watch: {
    //     'health.player': function () {
    //         if(this.health.player <= 0){
    //             if(confirm('You win! New Game?')){
    //                 this.newGame();
    //             } else {
    //                 this.gameStarted = false;
    //             }
    //         }
    //     },
    //     'health.monster': function () {
    //         if(this.health.monster <= 0){
    //             if(confirm('You died :( New game?')){
    //                 this.newGame()
    //             } else {
    //                 this.gameStarted = false;
    //             }
    //         }
    //     }
    // }
})