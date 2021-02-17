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
const customerInfo = {
  shippingAddress: {},
  paymentMethod: {}
}
const shippingAddress = {
  address1: '1 Material-UI Drive',
  address2: '',
  city: 'Charlotte',
  state: 'N.C.',
  zipCode: '99999',
  country: 'USA'
}

const paymentMethod = {
  cardType: 'Visa',
  cardHolder: 'Mr John Smith',
  cardNumber: 'xxxx-xxxx-xxxx-1234',
  expiryDate: '04/2024'
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

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return (
        <Review
          shippingAddress={shippingAddress}
          paymentMethod={paymentMethod}
        />
      )
    default:
      throw new Error('Unknown step')
  }
}

const Checkout = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

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
