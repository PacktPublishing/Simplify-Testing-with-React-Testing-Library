import * as React from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap'

const LanguageDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [language, setLanguage] = React.useState('')

  const languages = ['JavaScript', 'Ruby', 'Java', 'C#']
  const toggle = () => setDropdownOpen(prevState => !prevState)

  return (
    <div className="p-2 d-inline-block">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="primary" caret>
          Programming Language
        </DropdownToggle>
        <DropdownMenu style={{ width: '214px' }}>
          {languages.map(lang => {
            return (
              <DropdownItem key={lang} onClick={() => setLanguage(lang)}>
                {lang}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
      {language ? <h4>You selected: {language}</h4> : null}
    </div>
  )
}

export default LanguageDropdown
