import React from 'react'

const LanguageDetail = ({language}) => {
  return (
    <>
        <h3>Name: {language.name}</h3>
        <p>Description: {language.description}</p>
    </>
  )
  }

export default LanguageDetail;