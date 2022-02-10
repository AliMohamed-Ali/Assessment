import * as React from 'react'
import './card.css'
import { Typography } from '@mui/material';

const Card = props => {
  return <div className='card'>
    <div className='card-header'>
      <div>
        <div className='image-con'>
          <img src={props.item.image} alt="" />
        </div>
        <Typography sx={{color:'#fff', opacity:0.6}} variant="body2" gutterBottom component="div">
          {props.item.address.state}, {props.item.address.city}
        </Typography>
      </div>
      <div className='card-info'>
        <Typography sx={{color:'#fff'}} variant="subtitle2" gutterBottom component="div">
          {props.item.product_name}
        </Typography>
        <Typography sx={{color:'#fff', opacity:0.6}} variant="body2" gutterBottom component="div">
          {props.item.brand_name}
        </Typography>
        <Typography sx={{color:'#fff'}} variant="subtitle2" gutterBottom component="div">
          ${props.item.price}
        </Typography>
        <Typography sx={{color:'#fff', opacity:0.6}} variant="body2" gutterBottom component="div">
          {props.item.date.slice(0, 10)}
        </Typography>
      </div>
    </div>
    <div className='card-body'>

        <Typography sx={{color:'#fff', opacity:0.6}} variant="body2" gutterBottom component="div">
          {props.item.discription}
        </Typography>
      </div>
  </div>
};

export default Card;
