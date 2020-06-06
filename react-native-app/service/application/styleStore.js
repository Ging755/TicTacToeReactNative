import { StyleSheet, AsyncStorage } from 'react-native';
import { observable, runInAction, action } from 'mobx'

class StyleStore {
    @observable theme = '';
    @observable primary = '#212121';
    @observable primaryLight = '#484848';
    @observable primaryDark = '#000000';
    @observable primaryText = '#ffffff';
    @observable secondary = '#f06292';
    @observable secondaryLight = '#ff94c2';
    @observable secondaryDark = '#ba2d65';
    @observable secondaryText = '#000000';
    @observable styles = {};

    constructor(){
        this.getTheme();
    }     

    @action.bound
    async getTheme(){
        runInAction(async () => {
            this.theme = await AsyncStorage.getItem('Theme');
            this.primary = this.theme == 'Dark' ? '#212121' : '#f5f5f5'
            this.primaryLight = this.theme == 'Dark' ? '#484848' : '#ffffff'
            this.primaryDark = this.theme == 'Dark' ? '#000000' : '#c2c2c2'
            this.primaryText = this.theme == 'Dark' ? '#ffffff' : '#000000'
            this.secondary =  this.theme == 'Dark' ? '#f06292' : '#4dd0e1'
            this.secondaryLight = this.theme == 'Dark' ? '#ff94c2' : '#88ffff'
            this.secondaryDark = this.theme == 'Dark' ? '#ba2d65' : '#009faf'
            this.secondaryText = this.theme == 'Dark' ? '#000000' : '#000000'

            this.styles = StyleSheet.create({
                primaryButton: {
                    backgroundColor: this.primary,
                    color: this.secondary
                },
                primary: {
                    backgroundColor: this.primaryDark,
                    color: this.primaryText
                },
                primaryLight: {
                    backgroundColor: this.primaryLight,
                    color: this.primaryText
                },
                secondary: {
                    backgroundColor: this.secondary,
                    color: this.secondaryText
                }
            }); 
        })
    }

    @action.bound
    async toggleTheme(){
        runInAction(() => {
            this.theme = this.theme == 'Dark' ? 'Light' : 'Dark';
        })
        await AsyncStorage.setItem('Theme', this.theme);
        await this.getTheme();
    }
}


StyleStore = new StyleStore()
export default StyleStore