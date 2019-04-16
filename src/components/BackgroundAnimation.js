import React, {Component} from 'react'
import anime from 'animejs'
import './styles/BackgroundAnimation.css'

/**
 * The background animation for the landing page (Enter Component)
 */
class BackgroundAnimation extends Component{
  constructor(props){
    super(props)
    this.jellyAnimation = this.jellyAnimation.bind(this)
    this.reachAnimation = this.reachAnimation.bind(this)
    this.spreadAnimation = this.spreadAnimation.bind(this)

  }

  //The Standard background animation for the Enter page

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

  //Animation for when the Player hovers over the Enter button in the Enter page

  reachAnimation(){
    const reach = anime({
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
    return reach;
  }

  //Animation for when the player clicks on the Enter button in the Enter page

  spreadAnimation(){
      anime({
        targets: '#backgroundanimation',
        points: [{value: "350 270 380 181 580 182 822 228 991 182 919 280 980 490 820 520 810 587 700 492 553 522 388 599 391 404 215 388 289 340 231 283"},
          {value:  "-20 -15 250 -201 550 -20 862 -18 1401 -302 1219 260 1480 690 1220 900 1010 1010 730 900 533 920 88 1199 -201 850 -200 -20 269 340 -151 203"
        }, {value: "-20 -15 250 -201 550 -20 862 -18 1401 -302 1219 260 1480 690 1220 900 1010 1010 730 900 533 920 88 1199 -201 850 -200 -20 269 340 -151 203"
      }],
        easing: 'easeInOutExpo',
        duration: 5000,
        loop: false
      });
  }

  render(){
        let {hover, clicked} = this.props
        const jelly = this.jellyAnimation()
        const reach = this.reachAnimation()
        if(!hover){
          reach.pause()
          jelly.play()
        } else {
          jelly.pause()
          reach.play()
        }
        if(clicked){
          anime.remove('#backgroundanimation')
          this.spreadAnimation()
        }
    return(<svg id="background" viewBox="0 0 1180 850" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <polygon id='backgroundanimation' points="-20 -15 250 -201 550 -20 862 -18 1401 -302 1219 260 1480 690 1220 900 1010 1010 730 900 533 920 88 1199 -201 850 -200 -20 269 340 -151 203"
          stroke="black" fill="black" strokeWidth="3"/>
          </svg>

)
  }
}
export default BackgroundAnimation
