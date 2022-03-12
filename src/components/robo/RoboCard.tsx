import { CardContent, CardMedia } from '@mui/material';
import Card, { CardProps } from '@mui/material/Card'
import { styled } from '@mui/material/styles';
import IRobo from '../../interfaces/IRobo';

const MyCard = styled(Card)<CardProps>(() => (
  {
    margin:'0',
    transition: 'transform .4s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)'
    }
  }
));

export default function RoboCard(props:IRobo) {
  return (
    <MyCard sx={{ width: '100%', height: 450, backgroundColor:'#95dada', justifyContent:'center' }}>
      <CardContent>{props.name}</CardContent>
      <CardMedia
        component="img"
        width="100%"
        height="100%"
        image={`https://robohash.org/${props.id}?set=set2&size=180x180`}
      />
    </MyCard>
  )
}
