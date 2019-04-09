import React, {Component} from 'react'
import anime from 'animejs'
import './styles/BackgroundAnimation.css'

class BackgroundAnimation extends Component{
  componentDidMount(){
    anime({
        targets: '#backgroundanimation',
        points: [
          {value:  ["67 40 225 1 664 40 922 30 1151 72 1179 130 1150 470 1150 660 1130 757 1020 828 653 802 178 850 37 754 15 578 19 310 11 103",
           "40 23 210 15 630 17 932 18 1141 72 1159 112 1119 489 1170 690 1110 727 1030 772 623 812 158 820 45 724 35 568 23 300 1 103"
        ]}, {
            value:  "90 90 230 1 590 02 912 78 1131 22 1119 160 1180 460 1110 640 1170 787 980 732 673 842 198 720 21 824 55 598 9 330 51 103"}, {
            value:  "40 23 210 15 630 47 932 18 1171 52 1159 112 1119 489 1170 690 1110 727 1030 772 623 812 158 820 45 724 35 568 23 300 1 103"}, {
            value:  "83 78 225 7 599 08 909 68 1112 22 1129 169 1169 463 1097 650 1160 797 990 752 653 852 188 740 25 804 45 578 7 330 12 103"}, {
              value:  "67 40 225 1 664 80 922 30 1151 72 1179 130 1150 470 1150 660 1130 757 1020 828 653 802 178 850 37 754 15 578 19 310 11 103"}],
        easing: 'easeOutQuad',
        duration: 6000,
        loop: true
      });

  }

  render(){
    return(<svg id="background" viewBox="0 0 1180 850" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <polygon id='backgroundanimation' points="67 40 225 1 664 40 922 30 1151 72 1179 130 1150 470 1150 660 1130 757 1020 828 653 802 178 850 37 754 15 578 19 300 11 103"
          stroke="black" fill="black" stroke-width="5"/>
          </svg>

)
  }
}
export default BackgroundAnimation
