import React from 'react';
import { View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginBottom: hp('5%') }}>
  <View style={{ position: 'absolute', left: wp('5%'), bottom: hp('0%') }}>{props.renderPreviousButton()}</View>
  <View style={{ position: 'absolute', right: wp('5%'), bottom: hp('0%') }}>{props.renderNextButton()}</View>
</View>
);

export default ProgressButtons;
