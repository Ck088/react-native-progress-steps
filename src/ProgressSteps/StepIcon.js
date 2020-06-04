import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class StepIcon extends Component {
  render() {
    let styles;

    if (this.props.isActiveStep) {
      styles = {
        circleStyle: {
          width: hp('5%'),
          height: hp('5%'),
          borderRadius: hp('5%'),
          backgroundColor: this.props.activeStepIconColor,
          borderColor: this.props.activeStepIconBorderColor,
          borderWidth: wp('0.5%'),
          bottom: hp('0.1%')
        },
        circleText: {
          alignSelf: 'center',
          top: hp('1%'),
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: wp('18%'),
          paddingTop: hp('0.8%'),
          fontFamily: this.props.labelFontFamily,
          color: this.props.activeLabelColor
        },
        leftBar: {
          position: 'absolute',
          top: hp('2.5%'),
          left: 0,
          right: wp('8.5%'),
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: wp('5%')
        },
        rightBar: {
          position: 'absolute',
          top: hp('2.5%'),
          right: 0,
          left: wp('8.5%'),
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: wp('5%')
        },
        stepNum: {
          color: this.props.activeStepNumColor
        }
      };
    } else if (this.props.isCompletedStep) {
      styles = {
        circleStyle: {
          width: hp('5%'),
          height: hp('5%'),
          borderRadius: hp('5%'),
          backgroundColor: this.props.completedStepIconColor,
         
        },
        circleText: {
          alignSelf: 'center',
          top: hp('1%')
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: wp('18%'),
          paddingTop: hp('0.8%'),
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          // marginTop: 4
        },
        leftBar: {
          
          position: 'absolute',
          top: hp('2.5%'),
          left: 0,
          right: wp('8.5%'),
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: wp('5%')
        },
        rightBar: {
          position: 'absolute',
          top: hp('2.5%'),
          right: 0,
          left: wp('8.5%'),
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginLeft: wp('5%')
        },
        stepNum: {
          color: this.props.completedStepNumColor
        }
      };
    } else {
      styles = {
        circleStyle: {
          width: hp('5%'),
          height: hp('5%'),
          borderRadius: hp('5%'),
          backgroundColor: this.props.disabledStepIconColor
        },
        circleText: {
          alignSelf: 'center',
          top: hp('1%')
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: wp('18%'),
          paddingTop: hp('0.8%'),
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          // marginTop: 4
        },
        leftBar: {
          position: 'absolute',
          top: hp('2.5%'),
          left: 0,
          right: wp('8.5%'),
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginRight: wp('5%')
        },
        rightBar: {
          position: 'absolute',
          top: hp('2.5%'),
          right: 0,
          left: wp('8.5%'),
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: wp('5%')
        },
        stepNum: {
          color: this.props.disabledStepNumColor
        }
      };
    }

    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={styles.circleStyle}>
          <Text style={styles.circleText}>
            {this.props.isCompletedStep ? (
              <Text style={{ color: this.props.completedCheckColor }}>&#10003;</Text>
            ) : (
              <Text style={styles.stepNum}>{this.props.stepNum}</Text>
            )}
          </Text>
        </View>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {!this.props.isFirstStep && <View style={styles.leftBar} />}
        {!this.props.isLastStep && <View style={styles.rightBar} />}
      </View>
    );
  }
}

StepIcon.propTypes = {
  stepCount: PropTypes.number.isRequired,
  stepNum: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,

  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  activeStepIconBorderColor: PropTypes.string,

  progressBarColor: PropTypes.string,
  completedProgressBarColor: PropTypes.string,

  activeStepIconColor: PropTypes.string,
  disabledStepIconColor: PropTypes.string,
  completedStepIconColor: PropTypes.string,

  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  activeLabelColor: PropTypes.string,

  activeStepNumColor: PropTypes.string,
  completedStepNumColor: PropTypes.string,
  disabledStepNumColor: PropTypes.string,

  completedCheckColor: PropTypes.string
};

StepIcon.defaultProps = {
  borderWidth: wp('0.5%'),
  borderStyle: 'solid',
  activeStepIconBorderColor: '#4BB543',

  progressBarColor: '#ebebe4',
  completedProgressBarColor: '#4BB543',

  activeStepIconColor: 'transparent',
  completedStepIconColor: '#4BB543',
  disabledStepIconColor: '#ebebe4',

  labelColor: 'lightgray',
  activeLabelColor: '#4BB543',

  activeStepNumColor: 'black',
  completedStepNumColor: 'black',
  disabledStepNumColor: 'white',

  completedCheckColor: 'white'
};

export default StepIcon;
