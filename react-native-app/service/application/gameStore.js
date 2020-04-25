
import {observable, runInAction, action} from 'mobx'

class GameStore {
    @observable gameCode = '';

    @action.bound
    async setGameCode (value) {
        runInAction(() => {
            this.gameCode = value;
        })
    }
}


GameStore = new GameStore()
export default GameStore