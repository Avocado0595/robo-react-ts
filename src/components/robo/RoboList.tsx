import { Grid } from '@mui/material'
import IRobo from '../../interfaces/IRobo'
import RoboCard from './RoboCard'

export default function RoboList(props:{roboList:Array<IRobo>}) {
  return (
    <Grid container spacing={4}>
        {props.roboList?.map(robo =>( 
        <Grid key={robo.id} item xs={6} md={4} lg={3} spacing={0} justifyContent="space-around"
        alignItems="center">
        <RoboCard id={robo.id} name={robo.name}/>
      </Grid>))}
    </Grid>
  )
}
