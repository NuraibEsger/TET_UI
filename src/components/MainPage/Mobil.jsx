import classes from "../../assets/css/mobil.module.css";
import phoneImg from "../../assets/images/iPhone X.png"
import phoneImg2 from "../../assets/images/iPhone X (1).png"

export default function Mobil() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.heading}>
          <h1>Bütün prosesi mobil telefonunuzdan idarə edin</h1>
          <p>
            Tərcümə təsdiq prosesinizi idarə etmək, irəliləyişi izləmək və
            tapşırıqları təxirə salmadan yerinə yetirmək üçün tətbiqi yükləyin.
            Gedişatı izləyin və işləri vaxtında tamamlayın!
          </p>
        </div>
        <div className={classes.app}>
            <h3>Tətbiqi əldə et!</h3>
            <div className={classes.badges}>

            </div>
        </div>
      </div>
      <div className={classes.image}>
        <img src={phoneImg2} alt="" />
        <img src={phoneImg} className={classes.second} alt="" />
      </div>
    </div>
  );
}
