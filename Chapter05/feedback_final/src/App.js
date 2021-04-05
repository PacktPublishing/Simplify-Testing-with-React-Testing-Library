import React from 'react'
import FeedBack from './Feedback'

const App = () => {
  const [submittedFeedback, setSubmittedFeedback] = React.useState(false)
  const [message, setMessage] = React.useState('')

  const onSubmit = values => {
    setSubmittedFeedback(true)
    setMessage(values.name)
  }
  return submittedFeedback ? (
    <ThankYou message={message} />
  ) : (
    <FeedBack onSubmit={onSubmit} />
  )
}

const ThankYou = props => {
  return (
    <main className="flex my-10">
      <h1 className="text-2xl text-gray-900 font-semibold m-auto">
        We appreciate your responses {props.message}!
      </h1>
    </main>
  )
}

export default App
