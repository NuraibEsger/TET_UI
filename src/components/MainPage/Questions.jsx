import classes from "../../assets/css/questions.module.css"
import Button from "../Button";
import TabButton from "../TabButton";

export default function Questions() {
  return (
    <main>
      <div className={classes.header}>
        <h1>Tez-tez verilən suallar</h1>
        <p>Bunlar tez-tez eşitdiyimiz suallardır.</p>
      </div>
      <div className={classes.container}>
        <ul className={classes.questions}>
          <TabButton text = "asdasda">Tərcümə təsdiqi prosesi necə işləyir?</TabButton>
          <TabButton text = "aaaa">Tərcümə təsdiqi prosesi necə işləyir?</TabButton>
          <TabButton text = "as">Tərcümə təsdiqi prosesi necə işləyir?</TabButton>
          <TabButton text = "asddddasda">Tərcümə təsdiqi prosesi necə işləyir?</TabButton>
        </ul>
        <div className={classes.contact}>
          <div className={classes.header}>
            <h1>İstədiyiniz cavabı tapa bilmədiniz?</h1>
            <p>Problem deyil. Bizə mesaj yazın və biz sizinlə əlaqə saxlayacağıq.</p>
          </div>
          <Button>Əlaqə</Button>
        </div>
      </div>
    </main>
  );
}
