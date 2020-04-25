
import { observable, runInAction, action } from 'mobx'
import FireService from '../firebase/fireService'

class GameStore {
    @observable gameCode = '';
    @observable grid = ["", "", "", "", "", "", "", "", "",];
    @observable player = "";
    @observable oponent = "";
    @observable status = "";
    turn = 1;

    @action.bound
    async setGameCode(value) {
        runInAction(() => {
            this.gameCode = value;
        })
    }

    @action.bound
    async upDateGrid(girdNumber) {
        if(this.turn % 2 === 1 && this.player === "X"){
            this.grid.splice(girdNumber, 1, this.player);

            FireService.firebase.database().ref('games/' + this.gameCode).set({
                grid: this.grid,
                timeStamp: FireService.firebase.database.ServerValue.TIMESTAMP
            })
        }
        if(this.turn % 2 === 0 && this.player === "O"){
            this.grid.splice(girdNumber, 1, this.player);

            FireService.firebase.database().ref('games/' + this.gameCode).set({
                grid: this.grid,
                timeStamp: FireService.firebase.database.ServerValue.TIMESTAMP
            })
        }
    }

    @action.bound
    async createGame() {
        this.player = "X";
        this.oponent = "O";
        let gameKey = FireService.firebase.database().ref('games').push({
            grid: this.grid,
            timeStamp: FireService.firebase.database.ServerValue.TIMESTAMP
        }).key;

        this.gameCode = gameKey;
        this.getAndTrackGame(this.gameCode);
    }

    @action.bound
    async joinGame() {
        this.player = "O";
        this.oponent = "X";

        this.getAndTrackGame(this.gameCode);
    }

    async getAndTrackGame(gameKey) {
        FireService.firebase.database().ref('games/' + gameKey + '/').on('child_changed', snapshot => {
            if(Array.isArray(snapshot.val())){
                runInAction(() => {
                    this.grid = snapshot.val();
                })

                this.turn++;
                this.checkStatus();
            }
        });
    }

    async checkStatus(){
        let status = "";
        if([this.grid[0], this.grid[1], this.grid[2]].every( (val, i, arr) => val === arr[0])){
            if(this.grid[0] === this.player){
                status = "YOU WIN";
            }else if(this.grid[0] === this.oponent){
                status = "YOU LOSE"
            }
        }else if([this.grid[3], this.grid[4], this.grid[5]].every( (val, i, arr) => val === arr[0])){
            if(this.grid[3] === this.player){
                status = "YOU WIN";
            }else if(this.grid[3] === this.oponent){
                status = "YOU LOSE";
            }
        }else if([this.grid[6], this.grid[7], this.grid[8]].every( (val, i, arr) => val === arr[0])){
            if(this.grid[6] === this.player){
                status = "YOU WIN";
            }else if(this.grid[6] === this.oponent){
                status = "YOU LOSE";
            }
        }else if([this.grid[0], this.grid[4], this.grid[8]].every( (val, i, arr) => val === arr[0])){
            if(this.grid[0] === this.player){
                status = "YOU WIN";
            }else if(this.grid[0] === this.oponent){
                status = "YOU LOSE";
            }
        }else if([this.grid[2], this.grid[4], this.grid[6]].every( (val, i, arr) => val === arr[0])){
            if(this.grid[2] === this.player){
                status = "YOU WIN";
            }else if(this.grid[2] === this.oponent){
                status = "YOU LOSE";
            }
        }else if([this.grid[0], this.grid[3], this.grid[6]].every( (val, i, arr) => val === arr[0])){
            if(this.grid[0] === this.player){
                status = "YOU WIN";
            }else if(this.grid[0] === this.oponent){
                status = "YOU LOSE";
            }
        }else if([this.grid[1], this.grid[4], this.grid[7]].every( (val, i, arr) => val === arr[0])){
            if(this.grid[1] === this.player){
                status = "YOU WIN";
            }else if(this.grid[0] === this.oponent){
                status = "YOU LOSE";
            }
        }else if([this.grid[2], this.grid[5], this.grid[8]].every( (val, i, arr) => val === arr[0])){
            if(this.grid[2] === this.player){
                status = "YOU WIN";
            }else if(this.grid[0] === this.oponent){
                status = "YOU LOSE";
            }
        }else if(this.grid.every(el =>  el !== "")){
            status = "DRAW";
        }


        runInAction(() => {
            this.status = status;
        })
    }
}


GameStore = new GameStore()
export default GameStore