import classes from "../../assets/css/contentArea.module.css";
import firstImg from "../../assets/images/specify event details card.png";
import arrowImg from "../../assets/images/ArrowRight.png";
import Button from "../Button";

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
        <img src={firstImg} className={classes.imageStack} alt="" />
        
      </div>
    </main>
  );
}
