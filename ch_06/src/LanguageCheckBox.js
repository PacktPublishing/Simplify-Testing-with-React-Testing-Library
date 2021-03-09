import * as React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const LanguageCheckBox = () => {
  const languages = ['JavaScript', 'Ruby', 'Java', 'C#']

  return (
    <Form className="p-2">
      <FormGroup>
        <legend>Select Preferred Languages</legend>

        {languages.map(lang => (
          <CheckBox key={lang} lang={lang} />
        ))}
      </FormGroup>
    </Form>
  )
}

const CheckBox = props => {
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <FormGroup key={props.lang} check inline>
      <Label check>
        <Input type="checkbox" onChange={e => setIsChecked(e.target.checked)} />
        <span className={isChecked ? 'text-success font-weight-bold' : null}>
          {props.lang}
        </span>
      </Label>
    </FormGroup>
  )
}

export default LanguageCheckBox
