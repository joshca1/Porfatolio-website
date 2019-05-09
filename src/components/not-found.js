import React from 'react'
const NotFound = props => {
  const goBack = () => {
    props.history.goBack()
  }
  const goForward = () => {
    props.history.goForward()
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
      }}
    >
      <button onClick={goBack}>GO BACK</button>
      <button onClick={goForward}>GO Foward</button>
    </div>
  )
}

export default NotFound
