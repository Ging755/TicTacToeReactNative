import { StyleSheet } from 'react-native';

class StyleStore {
    theme = 'Dark';
    primary = '#212121';
    primaryLight = '#484848';
    primaryDark = '#000000';
    primaryText = '#ffffff';
    secondary = '#f06292';
    secondaryLight = '#ff94c2';
    secondaryDark = '#ba2d65';
    secondaryText = '#000000';

    styles = StyleSheet.create({
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
}


StyleStore = new StyleStore()
export default StyleStore