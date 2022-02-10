import Menu from './Menu'
import Slider from './Slider'
import React,{useEffect,useState} from 'react'
import {
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material'

const App = props => {

  const [items, setItems] = useState([]);
  let pNames = new Set()
  let pnames = []



  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
    .then(res => res.json())
    .then(data =>setItems(data))

  },[])

  for(let item of items){
    pNames.add(item.product_name)
  }
  pnames = [...pNames]
  console.log(pnames)


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container justifyContent='center' spacing={2} mt={3}>
          <Grid item xs={12} md={3}>
            <Menu pnames={pnames} items={items} />
          </Grid>
          <Grid item xs={10} md={9}>
          <Typography sx={{color:'#fff'}} variant="h4" component="div" gutterBottom>
            Edvora
          </Typography>
          <Typography sx={{color:'#fff', opacity:0.6}} variant="h6" component="div" gutterBottom>
            Products
          </Typography>
          {pnames.map(pname => {
            return <Slider pname={pname} items={items.filter(item => item.product_name === pname ).slice()} />
          })}
          </Grid>
          
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
