import classes from '../assets/css/contentArea.module.css'
import firstImg from "../assets/images/specify event details card.png"
import secondImg from "../assets/images/user 2.png"
import thirdImg from "../assets/images/user 3.png"
import fourthImg from "../assets/images/user 1.png"

export default function ContentArea() {
  return (
    <main>
        <div className={classes.contentLeft}></div>
        <div>
            <img src={firstImg} className={classes.firstImg} alt="" />
            <img src={secondImg} className={classes.firstImg} alt="" />
            <img src={thirdImg} className={classes.firstImg} alt="" />
            <img src={fourthImg} className={classes.firstImg} alt="" />
        </div>
    </main>
  )
}
