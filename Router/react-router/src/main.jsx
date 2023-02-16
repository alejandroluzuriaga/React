import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Languages from './pages/Languages'
import Language from './pages/Language'
import NotFound from './pages/404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'> {/*basename is used for defining our routes. For example: examplepage.com/... and "/" is out basename*/}
      <Routes> 
        <Route path='/' element={<App />}> 
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='programming-languages' element={<Languages />} />
          <Route path='programming-languages/:id' element={<Language />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
            {/* We wrap our content first with <BrowserRouter>.
            Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
            <Route>s can be nested. The first <Route> has a path of / and renders the App component.
            The nested <Route>s inherit and add to the parent route. So the about path is combined with the parent and becomes /about.
            The Home component route does not have a path but has an index attribute that specifies this route as the DEFAULT route for the parent route, which is /.
            Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page. */}
