import classes from "../../assets/css/selection.module.css";
import groupImg from "../../assets/images/groups.png";
import spinnerImg from "../../assets/images/Spinner.png";
import hourGlassImg from "../../assets/images/Hourglass.png";
import Feature from "../Feature";

export default function Selection() {
  return (
    <section className={classes.main}>
      <div className={classes.header}>
        <h1>Niyə bizi seçməlisiniz?</h1>
      </div>
      <div className={classes.features}>
        <Feature
          img={groupImg}
          header="Peşəkarlıq və Təcrübə"
          paragraph="Təcrübəli və ixtisaslı tərcüməçilərdən ibarət komandamız sənədlərinizin yüksək keyfiyyətdə tərcüməsini təmin edir."
          classes={classes}
        />
        <Feature
          img={spinnerImg}
          header="Sabit Qiymətlər"
          paragraph="Rəqabətli və münasib qiymətlər ilə xidmətlərimizə uyğun büdcə dostu təkliflər."
          classes={classes}
        />
        <Feature
          img={hourGlassImg}
          header="Sürət və Dəqiqlik"
          paragraph="Sürətli və vaxtında çatdırılma ilə yanaşı, tərcümənin dəqiqliyi və doğruluğu."
          classes={classes}
        />
      </div>
    </section>
  );
}
