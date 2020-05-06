import React from 'react';
import { View } from 'react-native';





const NavIcons = (props) =>{

  let src='iconRewardsLarge.svg'

  if (props.name=== 'rewards'){
    src = 'iconRewardsLarge.svg'
  }
  if (props.name=== 'booking'){
    src = 'iconNewBookingLarge.svg'
  }
  if (props.name=== 'appointment'){
    src = 'iconAppointmentsLarge.svg'
  }
 
  return (
    <View>
    <img src={require(`../../assets/StaffBumpGraphics/Artwork/${src}`)} alt="Smiley face" height="42" width="188" />
    </View>
  )
}

export default NavIcons
