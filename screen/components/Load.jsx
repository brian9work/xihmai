import { View, Image, Text, Dimensions } from 'react-native'
import React from 'react'
import { images } from '../../constants'

export default function Load({ type }) {
  if (type === "load") {
    return (
      <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} >
        <Image
          style={{ width: '60%', height: '60%', resizeMode: 'contain' }}
          source={images.gifMap}
        />
      </View>
    )
  }
  if (type === "act") {
    return (
      <View style={{
        width: Dimensions.get("screen").width, 
        height: Dimensions.get("screen").height,
        alignItems: 'center',
        }} >
        <Image
          style={{ 
            marginTop:10,
            width: .9 * Dimensions.get("screen").width, 
            height: .9 * Dimensions.get("screen").width, 
          }}
          source={images.LActividades}
        />
      </View>
    )
  }
  return (
    <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} >
      <Image
        style={{ width: '60%', height: '60%', resizeMode: 'contain' }}
        source={images.gif}
      />
    </View>
  )
}