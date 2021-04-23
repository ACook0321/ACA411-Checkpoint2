import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Map from '../containers/Map'


const Details = (props) => {
  const id = props.match.params.id
  const business = props.listings.find(item => item.id === Number(id))

  return (
    <Container maxWidth="sm">
      <div>
        <Typography variant="h3" gutterBottom>
          {business.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
        {business.address}
        </Typography>      
        <Typography variant="h6" gutterBottom>
        {business.hours}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {business.description}
        </Typography>
      </div>
      <div>
        <Map address={props.map}/>
      </div>
    </Container>
  )
}

export default Details
