import Questions from "../components/MainPage/Questions";
import classes from "../assets/css/home.module.css"
import Translate from "../components/MainPage/Translate";
import Mobil from "../components/MainPage/Mobil";
import PopularLanguages from "../components/MainPage/PopularLanguages";
import Selection from "../components/MainPage/Selection";


export default function Home() {
  return (
    <div className={classes.main}>
      <Translate />
      <Selection />
      <PopularLanguages />
      <Questions />
      <Mobil />
    </div>
  )
}
