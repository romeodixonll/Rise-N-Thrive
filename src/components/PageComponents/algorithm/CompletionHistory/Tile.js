import classes from './Tile.module.css'

const Tile = ({completed, index}) => {
    
    return <div className={classes.tile} style={completed ? {backgroundColor:'green'} : {backgroundColor:'grey'}}></div>
}

export default Tile