import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Review from './Review'

const fakeProducts = [
  { name: 'T-shirt', desc: 'White Fitted Shirt', price: '$19.99' },
  { name: 'Denim Jeans', desc: 'GAP Jeans', price: '$29.99' },
  {
    name: 'Nike Free Runner',
    desc: 'black/grey running shoe',
    price: '$49.99'
  },
  { name: 'Shipping', desc: '', price: 'Free' }
]

const customerInfo = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  cardType: '',
  cardHolder: '',
  cardNumber: '',
  expiryDate: '',
  cardCvv: ''
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}))

const steps = ['Shipping address', 'Payment details', 'Review your order']

const Checkout = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [formValues, setFormValues] = React.useState(customerInfo)

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm formValues={formValues} setFormValues={handleChange} />
        )
      case 1:
        return (
          <PaymentForm formValues={formValues} setFormValues={handleChange} />
        )
      case 2:
        return <Review formValues={formValues} products={fakeProducts} />
      default:
        throw new Error('Unknown step')
    }
  }

  const handleNext = () => setActiveStep(activeStep + 1)

  const handleBack = () => setActiveStep(activeStep - 1)

  return (
    <>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    </>
  )
}

export default Checkout
