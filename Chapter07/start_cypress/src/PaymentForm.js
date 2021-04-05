import { Grid, TextField, Typography } from '@material-ui/core'

const PaymentForm = ({ formValues, setFormValues }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardType"
            label="Card type"
            fullWidth
            name="cardType"
            value={formValues.cardType}
            onChange={event => setFormValues(event)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardHolder"
            label="Name on card"
            fullWidth
            name="cardHolder"
            value={formValues.cardHolder}
            onChange={event => setFormValues(event)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            type="tel"
            inputMode="numeric"
            name="cardNumber"
            value={formValues.cardNumber}
            onChange={event => setFormValues(event)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="tel"
            inputMode="numeric"
            id="expiryDate"
            label="Expiration Date"
            fullWidth
            name="expiryDate"
            value={formValues.expiryDate}
            onChange={event => setFormValues(event)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            name="cardCvv"
            value={formValues.cardCvv}
            onChange={event => setFormValues(event)}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PaymentForm
