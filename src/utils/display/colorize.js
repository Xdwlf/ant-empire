import React from 'react'
import {scale} from './styles'

/**
 * addStyleToText
 * Puts text in a JSX span and returns it with the desired style
 * @param {String} text - The text to stylize
 * @param {Object} style - The style to apply
 */
export function addStyleToText(text, style){
  return <span style={style}>{text}</span>
}

/**
 * Styles numbers by Positive or Negative
 * @param {number} num - The value to be calculated between -1 and 1
 */

export function styleByValue(num){
  if(num>0){
    return addStyleToText(num, scale.okay)
  } else{
    return addStyleToText(num, scale.danger)
  }
}
