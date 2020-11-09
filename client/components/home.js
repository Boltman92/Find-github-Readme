import React, { useState, useEffect } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import axios from 'axios'

import Head from './head'
import Main from './main'
import Repos from './repos'
import Readme from './readme'
import Header from './header'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const { username, reponame } = useParams()
  const url = `https://api.github.com/users/${username}/repos`
  const urlReadme = `https://api.github.com/repos/${username}/${reponame}/readme`
  const [repositoriesList, setRepos] = useState([])  
  const [readmemd, setReadme] = useState('')



  useEffect(() => {
    if (username) {
      axios.get(url).then(it => {
        setRepos(it.data.map((repo) => ({ name: repo.name, id: repo.id})))
    }) 
    }
  }, [])

  useEffect(() => {
    if (typeof username !== 'undefined' && typeof reponame !== 'undefined') {
    axios.get(urlReadme).then( ({ data }) => {
      axios.get(data.download_url).then(({data: text}) => {
        setReadme(text)
      })
      })
    }
  },[])


  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:username" component={() => <Repos repos={repositoriesList} />} />
        <Route exact path="/:username/:reponame" component={() => <Readme readme={readmemd} />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
