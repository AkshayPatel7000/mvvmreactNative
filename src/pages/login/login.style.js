import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale, scale} from 'responsiveScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
});
