import React from 'react'
import {scale} from './styles'
export function addStyleToText(text, style){
  return <span style={style}>{text}</span>
}

export function styleByValue(num){
  if(num>0){
    return addStyleToText(num, scale.okay)
  } else{
    return addStyleToText(num, scale.danger)
  }
}
