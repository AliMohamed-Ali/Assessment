import * as React from 'react';
import { Typography } from '@mui/material';
import Card from './Card'
import './slider.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Slider = props => {

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;

  const lastIndex = currentPage * itemsPerPage 
  const firstIndex = lastIndex - itemsPerPage
  const totalPages = Math.ceil(props.items.length / itemsPerPage)

  const next = () => {
   if(currentPage < totalPages) setCurrentPage(currentPage + 1)
  }
  const prev = () => {
    if(currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const currentItems = props.items.slice(firstIndex, lastIndex)

  return <div className='slider'>
        <Typography sx={{color:'#fff'}} variant='h5' gutterBottom component="div">
          {props.pname}
        </Typography>
        <hr style={{color:'#CBCBCB', opacity:0.5}}/>
        <div className='pag-per'>
          {
            currentPage > 1 &&
            <ArrowBackIosIcon className='prev' onClick={prev} />
          }
          <div className='pag'>
            {currentItems.map((item, index) => {
              return <Card item={item} key={index} />
            })  
            }
          </div>
          {
            currentPage < totalPages &&
            <ArrowForwardIosIcon className='next' onClick={next} />
          }
        </div>
  </div>;
};

export default Slider;
