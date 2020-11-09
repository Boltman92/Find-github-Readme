import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
    const { username, reponame } = useParams()
  return (
    <nav className="flex items-center justify-between font-bold flex-wrap p-6 bg-teal-400">
     <div>  {reponame || username || 'Welcome'}   </div>
     { username && (<Link to="/"> go home  </Link> )}
      { reponame && (<Link to={`/${username}`}> go repositories  </Link> )}
      </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
