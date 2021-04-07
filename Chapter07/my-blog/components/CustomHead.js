import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

CustomHead.propTypes = {
  title: PropTypes.string.isRequired
}

export default CustomHead
