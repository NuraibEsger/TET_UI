import classes from "../assets/css/questions.module.css";
import TabButton from "./TabButton";

export default function Questions() {
  return (
    <main>
      <head>
        <h1>Tez-tez verilən suallar</h1>
        <p>Bunlar tez-tez eşitdiyimiz suallardır.</p>
      </head>
      <div className={classes.container}>
        <ul className={classes.questions}>
          <TabButton text = "asdasda">Tərcümə təsdiqi prosesi necə işləyir?</TabButton>
          <TabButton text = "aaaa">Tərcümə təsdiqi prosesi necə işləyir?</TabButton>
          <TabButton text = "as">Tərcümə təsdiqi prosesi necə işləyir?</TabButton>
          <TabButton text = "asddddasda">Tərcümə təsdiqi prosesi necə işləyir?</TabButton>
        </ul>
        <div className={classes.contact}></div>
      </div>
    </main>
  );
}
