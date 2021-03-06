import React, {Component} from 'react'
import anime from 'animejs'
import './styles/Logo.css'

/**
 * Logo on Enter page at Landing
 */

class Logo extends Component{
  componentDidMount(){
    //Logo animation for appearing
    anime({
      targets: 'svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    })
  }
  render(){
    return <svg id="logo" width="575" height="64" viewBox="0 0 575 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.896 44.24H46.584L33.24 8.81601L19.896 44.24ZM53.208 61.712L48.792 49.904H17.784L13.368 61.712H3L26.04 2H40.536L63.672 61.712H53.208Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    <path d="M117.464 2H127.16V61.712H117.08L85.4963 13.424V61.712H75.8003V2H86.2643L117.464 49.904V2Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    <path d="M190.005 2V7.664H168.789V61.712H158.229V7.664H137.013V2H190.005Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    <path d="M237.115 56.048H269.851V61.712H226.363V2H268.507V7.664H237.115V28.304H264.571V33.968H237.115V56.048Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    <path d="M292.579 61.712H283.363V2H294.691L315.811 40.784L337.699 2H349.123V61.712H339.811V14L320.131 48.752H311.587L292.579 14V61.712Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    <path d="M406.917 33.584V10.64C406.917 9.36 406.725 8.56 406.341 8.24C405.957 7.856 405.157 7.664 403.941 7.664H377.733V36.56H403.941C405.157 36.56 405.957 36.368 406.341 35.984C406.725 35.6 406.917 34.8 406.917 33.584ZM367.269 2H409.797C414.853 2 417.381 4.528 417.381 9.584V34.64C417.381 39.696 414.853 42.224 409.797 42.224H377.733V61.712H367.269V2Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    <path d="M432.727 2H443.479V61.712H432.727V2Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    <path d="M473.077 7.664V34.64H499.381C500.661 34.64 501.461 34.448 501.781 34.064C502.165 33.68 502.357 32.88 502.357 31.664V10.64C502.357 9.36 502.165 8.56 501.781 8.24C501.461 7.856 500.661 7.664 499.381 7.664H473.077ZM473.077 40.304V61.712H462.613V2H505.237C510.293 2 512.821 4.528 512.821 9.584V32.72C512.821 37.776 510.293 40.304 505.237 40.304H499.765L513.301 61.712H502.357L489.205 40.304H473.077Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    <path d="M539.927 56.048H572.663V61.712H529.175V2H571.319V7.664H539.927V28.304H567.383V33.968H539.927V56.048Z" stroke="white" strokeWidth="3" mask="url(#path-1-outside-1)"/>
    </svg>
  }

}

export default Logo;
