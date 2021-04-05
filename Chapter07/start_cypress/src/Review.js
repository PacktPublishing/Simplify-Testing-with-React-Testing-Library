import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}))

const Review = ({ formValues, products }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $99.97
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {formValues.firstName} {formValues.lastName}
          </Typography>
          <Typography gutterBottom>{formValues.address1}</Typography>
          <Typography gutterBottom>{formValues.address2}</Typography>
          <Typography gutterBottom>
            {formValues.city}, {formValues.state} {formValues.zipCode}
          </Typography>
          <Typography gutterBottom>{formValues.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formValues.cardType}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Holder</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formValues.cardHolder}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Number</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formValues.cardNumber}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Expiry Date</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formValues.expiryDate}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Review
