import React from 'react'
import {getLanguages} from '../api/data.js'
import LanguageDetail from '../components/LanguageDetail'
import { Link, Outlet } from 'react-router-dom'

const Languages = () => {
  const languages = getLanguages();
  return (
    <>
    <h3>All languages</h3>
    <ul>
      {
        languages.map((language) =>(
          <li key={language.id}>
            <Link to={`/programming-languages/${language.id}`}>
            <LanguageDetail language={language} />
            </Link>
          </li>
        ))
      }
    </ul>
    <Outlet />
    </>
  )
}

export default Languages