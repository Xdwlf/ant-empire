import React from 'react'
import {scale} from './styles'
/**
 * Returns a span of text depending on number value of resource
 * @param {number} num - Resource availability represented by a number between 1-10
 */
export function describeResourceAsAdjective(num){
  switch(true){
    case num < 2:
      return <span style={scale.danger}>Barren</span>
    case num < 4:
      return <span style={scale.caution}>Scarce</span>
    case num < 6:
      return <span style={scale.warning}>Moderate</span>
    case num < 8:
      return <span style={scale.okay}>Plentiful</span>
    default:
      return <span style={scale.good}>Overflowing</span>
  }
}
