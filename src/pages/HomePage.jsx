import Questions from "../components/MainPage/Questions";
import classes from "../assets/css/home.module.css"
import Translate from "../components/MainPage/Translate";
import Mobil from "../components/MainPage/Mobil";


export default function Home() {
  return (
    <div className={classes.main}>
      <Translate />
      <Questions />
      <Mobil />
    </div>
  )
}
