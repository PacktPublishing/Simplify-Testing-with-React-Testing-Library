import React from 'react'
import loginImg from './image/login.png'

const NoAccessibility = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h1>Example Inaccessible Input element</h1>
      <input src={loginImg} type="image" />

      <h1>Example Inaccessible Unordered List</h1>
      <ul>
        <li>Building with React</li>
        <li>Testing with React Testing Library</li>
        <img
          src="http://unsplash.it/g/200?random&gravity=center"
          alt="tulips"
        />
      </ul>
    </div>
  )
}

export default NoAccessibility
