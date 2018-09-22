import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  '@media ios': {
    headerLogoPaddingVertical: 10,
    homeDefault: 'puzzle',
    homeFocused: 'puzzle',
    otherDefault: 'info',
    otherFocused: 'info',
  },
  '@media android': {
    headerLogoPaddingVertical: 15,
    homeDefault: 'puzzle',
    homeFocused: 'puzzle',
    otherDefault: 'info',
    otherFocused: 'info',
  },
});

export default styles;
