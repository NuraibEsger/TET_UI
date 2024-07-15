import classes from "../assets/css/contentArea.module.css";
import firstImg from "../assets/images/specify event details card.png";
import secondImg from "../assets/images/user 2.png";
import thirdImg from "../assets/images/user 3.png";
import fourthImg from "../assets/images/user 1.png";
import arrowImg from "../assets/images/ArrowRight.png";
import Button from "./Button";

export default function ContentArea() {
  return (
    <main className={classes.main}>
      <div className={classes.contentLeft}>
        <div className={classes.contentText}>
          <h1>Zəhmətsiz Tərcümə və Problemsiz Sənəd Təsdiqi</h1>
          <p>
            Biznes Ehtiyaclarınız üçün Peşəkar, Dəqiq və Etibarlı Tərcümə
            Xidmətləri
          </p>
        </div>
        <Button img={arrowImg}>Tərcümə et</Button>
      </div>
      <div className={classes.contentRight}>
        <img src={firstImg} className={`${classes.imageStack} ${classes.firstImg}`} alt="" />
        <img src={secondImg} className={`${classes.imageStack} ${classes.secondImg}`} alt="" />
        <img src={thirdImg} className={`${classes.imageStack} ${classes.thirdImg}`} alt="" />
        <img src={fourthImg} className={`${classes.imageStack} ${classes.fourthImg}`} alt="" />
      </div>
    </main>
  );
}
