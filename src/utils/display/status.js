import React from 'react'
import {scale} from './styles'

export function describeRiskAsAdjective(num){
  switch (true) {
    case num < 2:
      return <span style={scale.good}>Very Low</span>
    case num < 4:
      return <span style={scale.okay}>Low</span>
    case num < 6:
      return <span style={scale.warning}>Medium</span>
    case num < 8:
      return <span style={scale.caution}>High</span>
    default:
      return <span style={scale.danger}>Very High</span>
  }
}
