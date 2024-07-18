export default function Numbers({ classes, header, math, paragraph }) {
    return <div className={classes.item}>
        <div className={classes.group}>
            <h1>{header}</h1>
            <p>{math}</p>
        </div>
        <p>{paragraph}</p>
    </div>
}