import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import "../css/list.css"


const Listings = (props) => {
  console.log(props)
  return (
      <Container maxWidth="lg" className="listing-container">
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Hours</TableCell>
                      <TableCell>Address</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              {props.listings.map((listing, index) => (
                  <TableRow key={listing.id}>
                      <TableCell component="th" scope="row">
                        <Link className="list-text" to={`/listing/${listing.id}`} onClick={() => props.updateMap(listing.address)}> {listing["name"]}</Link>
                      </TableCell>
                      <TableCell>{listing["description"]}</TableCell>
                      <TableCell>{listing["hours"]}</TableCell>
                      <TableCell>{listing["address"]}</TableCell>
                      <TableCell>
                    {document.cookie === 'loggedIn=true'? (
                            <DeleteIcon
                                onClick={() => props.removeListing(index)}
                                className="icon text-red"/>) : (null)}
                      </TableCell>
                  </TableRow>
              ))}
              </TableBody>
          </Table>
      </Container>
  )
}

export default Listings