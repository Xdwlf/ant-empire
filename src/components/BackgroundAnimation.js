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
          {value:  ["20 30 130 41 590 22 912 38 1131 102 1119 290 1080 460 1110 610 1170 737 980 832 673 842 398 820 81 724 15 578 20 390 81 253",
           "310 290 390 171 590 192 812 218 971 192 909 290 990 480 800 500 820 557 710 502 573 532 398 590 371 424 225 398 299 350 221 293"
        ]}, {
            value:  "80 90 370 71 630 172 812 98 881 172 1090 460 1030 560 1090 740 980 787 720 632 473 642 398 690 71 524 195 398 79 230 51 103"},{
            value:  "380 200 470 91 530 62 712 98 881 52 990 40 1090 90 1080 340 930 417 730 632 513 682 328 500 371 434 245 318 259 290 291 193"
          },{
          value:  "330 130 470 191 630 102 732 198 811 222 890 460 790 530 650 570 530 757 430 792 403 722 238 710 81 784 95 555 239 380 231 253"
        },{
          value:"40 210 190 71 430 82 732 158 881 299 1009 310 1000 490 880 620 850 727 710 682 363 742 128 620 301 524 295 428 219 350 71 283"
        },{
          value: "310 290 390 171 590 192 812 218 971 192 909 290 990 480 800 500 820 557 710 502 573 532 398 590 371 424 225 398 299 350 221 293"
        },
          {
            value: "20 30 130 41 590 22 912 38 1131 102 1119 290 1080 460 1110 610 1170 737 980 832 673 842 398 820 81 724 15 578 20 390 81 253"
          }
          ],
        easing: 'easeInOutQuad',
        duration: 10000,
        loop: true
      });
    return jelly;
  }

  reachAnimation(){
    anime({
        targets: '#backgroundanimation',
        points: [
          {value:  "330 300 275 60 634 190 902 43 851 292 1059 170 850 470 1020 610 780 657 870 788 593 602 178 830 387 484 65 518 219 310 19 133"
        },
        {value: "280 70 495 190 634 40 732 223 991 62 820 290 1010 400 820 470 1010 697 760 658 653 832 438 680 137 714 295 508 89 420 269 313"}
        ,{
            value:  "380 270 295 90 664 210 872 23 821 262 1159 210 810 450 980 570 810 627 840 818 533 632 138 780 337 514 95 558 269 390 69 193"},

          ],
        easing: 'easeInOutExpo',
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
      <polygon id='backgroundanimation' points="20 30 130 41 590 22 912 38 1131 102 1119 290 1080 460 1110 610 1170 737 980 832 673 842 398 820 81 724 15 578 20 390 81 253"
          stroke="black" fill="black" stroke-width="3"/>
          </svg>

)
  }
}
export default BackgroundAnimation

// "90 90 230 1 590 02 912 78 1131 22 1119 160 1180 460 1110 640 1170 787 980 732 673 842 198 699 21 824 55 598 9 330 91 153"
