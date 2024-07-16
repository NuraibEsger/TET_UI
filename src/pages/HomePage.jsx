import Questions from "../components/Questions";
import classes from "../assets/css/home.module.css"
import Translate from "../components/Translate";
import Mobil from "../components/Mobil";


export default function Home() {
  return (
    <div className={classes.main}>
      <Translate />
      <Questions />
      <Mobil />
    </div>
  )
}
