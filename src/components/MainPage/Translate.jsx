import classes from "../../assets/css/translate.module.css";
import ContentArea from "./ContentArea";

export default function Translate() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <h1>Sənədlərinizin tez və dəqiq tərcüməsi</h1>
          <p>
            Saatlar ərzində sənədlərinizin yüksək keyfiyyətli və etibarlı
            tərcüməsini təmin edirik. Peşəkar tərcüməçilərimiz sürətli və dəqiq
            tərcümə ilə ehtiyaclarınıza cavab verir. Tərcümə ehtiyaclarınız üçün
            bizə güvənin.
          </p>
        </div>
      </div>
      <ContentArea />
    </>
  );
}
