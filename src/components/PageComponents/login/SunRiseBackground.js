import classes from './SunRiseBackground.module.css'

const SunRiseBackground = () => {
    return (
        <div className={classes.container}>
            <div className={classes.sky}></div>
            <div className={classes.sea}>
                <div className={classes.light}></div>
            </div>
            <div className={classes.sun}></div>
            <div className={classes.bird1}></div>
            <div className={classes.bird1r}></div>
            <div className={classes.bird}></div>
            <div className={classes.birdr}></div>
            <div className={classes.fin}>
                <div className={classes.wave}></div></div>
        </div>
    )
};

export default SunRiseBackground;
