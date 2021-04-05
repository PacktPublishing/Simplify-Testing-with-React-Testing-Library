import * as React from 'react'
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap'

const MoreInfoPopover = () => {
  const [popoverOpen, setPopoverOpen] = React.useState(false)

  const toggle = () => setPopoverOpen(!popoverOpen)

  return (
    <div style={{ margin: '5px' }}>
      <Button id="moreInfo" type="button" color="primary">
        More Info
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="moreInfo"
        toggle={toggle}
      >
        <PopoverHeader>Lorem ipsum</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </PopoverBody>
      </Popover>
    </div>
  )
}

export default MoreInfoPopover
