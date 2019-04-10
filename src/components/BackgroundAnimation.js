import React, {Component} from 'react'
import anime from 'animejs'
import './styles/BackgroundAnimation.css'

class BackgroundAnimation extends Component{
  constructor(props){
    super(props)
    this.jellyAnimation = this.jellyAnimation.bind(this)
    this.reachAnimation = this.reachAnimation.bind(this)
  }

  jellyAnimation(){
    const jelly = anime({
        targets: '#backgroundanimation',
        points: [
          {value:  ["190 190 230 121 590 102 912 178 1031 122 1019 260 1080 460 1010 640 1070 687 690 732 673 742 198 620 121 724 155 498 99 330 191 253",
           "190 190 230 121 590 102 912 178 1031 122 1019 260 1080 460 1010 640 1070 687 690 732 673 742 198 620 121 724 155 498 99 330 191 253"
        ]}, {
            value:  "80 90 370 71 630 172 812 98 881 172 1090 460 1030 560 1090 740 980 787 720 632 473 642 398 690 71 524 195 398 79 230 51 103"},{
            value:  "180 110 470 191 530 62 712 198 881 72 990 160 1090 260 880 640 780 737 630 732 523 602 328 590 171 424 125 298 109 180 61 153"
          },
          {
            value: "190 190 230 121 590 102 912 178 1031 122 1019 260 1080 460 1010 640 1070 687 690 732 673 742 198 620 121 724 155 498 99 330 191 253"
          }
          ],
        easing: 'easeOutQuad',
        duration: 6000,
        loop: true
      });
    return jelly;
  }

  reachAnimation(){
    anime({
        targets: '#backgroundanimation',
        points: [
          {value:  "330 300 275 60 634 190 902 43 851 292 1059 170 850 470 1020 610 780 657 870 788 593 602 178 830 387 484 65 518 219 310 19 133"
        }, {
            value:  "380 270 295 90 664 210 872 23 821 262 1159 210 810 450 980 570 810 627 840 818 533 632 138 780 337 514 95 558 269 390 69 193"}, ],
        easing: 'linear',
        direction: 'alternate',
        duration: 2000,
        loop: true
      });
  }

  render(){
        let {hover} = this.props
        const jelly = this.jellyAnimation()
        if(!hover){
          jelly.play()
        } else {
          jelly.pause()
          this.reachAnimation()
        }
    return(<svg id="background" viewBox="0 0 1180 850" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <polygon id='backgroundanimation' points="67 40 225 1 664 40 922 30 1151 72 1179 130 1150 470 1150 660 1130 757 1020 828 653 802 178 850 37 754 15 578 19 300 11 103"
          stroke="black" fill="black" stroke-width="3"/>
          </svg>

)
  }
}
export default BackgroundAnimation

// "90 90 230 1 590 02 912 78 1131 22 1119 160 1180 460 1110 640 1170 787 980 732 673 842 198 699 21 824 55 598 9 330 91 153"
