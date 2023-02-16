import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LanguageDetail from '../components/LanguageDetail'
import { deleteLanguage, getLanguage } from '../api/data'
const Language = () => {
  const params = useParams();
  const language = getLanguage(params.id)
  const navigate = useNavigate();
  
  return (
    <>
      <h2>Language Page</h2>
      <LanguageDetail language={language}/>

      <button onClick={()=>{
        deleteLanguage(language.id).then(()=>{
          navigate('/programming-languages');
        })
        }}>Delete {language.name}❌</button>
    </>
  )
}

export default Language