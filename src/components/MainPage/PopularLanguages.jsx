import classes from "../../assets/css/popularLanguages.module.css"
import LButton from "../LanguageButton"
import Numbers from "../NumberItem"

export default function PopularLanguages() {
    return <section className={classes.body}>
        <div className={classes.popular}>
            <header>
                <h1>Ən Populyar Dil Cütlükləri</h1>
                <p>110+ dil cütü arasında sözləri, cümlələri və sənədləri dərhal tərcümə edin. </p>
            </header>
            <div className={classes.container}>
                <u className={classes.list}>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                </u>
                <u className={classes.list}>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                </u>
                <u className={classes.list}>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                    <LButton>İngilis-İspan</LButton>
                </u>
            </div>
        </div>
        <div className={classes.numbers}>
            <Numbers classes={classes} header="50" math="+" paragraph="dəstəklənən dillər" />
            <div className={classes.divider}></div>
            <Numbers classes={classes} header="98" math="%" paragraph="məmnuniyyət" />
            <div className={classes.divider}></div>
            <Numbers classes={classes} header="184" math="k" paragraph="istifadəçilər" />
            <div className={classes.divider}></div>
            <Numbers classes={classes} header="600" math="/s" paragraph="tərcümə edilmiş sözlər  " />
        </div>
    </section>
}