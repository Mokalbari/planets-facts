import Navbar from '../components/Navbar'
import MainHeroContainer from '../components/MainHeroContainer'
import Information from '../components/Information'

import { useState } from 'react'

const App: React.FC = () => {
  const [planet, setPlanet] = useState('Earth')

  return (
    <>
      <Navbar setPlanet={setPlanet} />
      <MainHeroContainer />
      <Information />
    </>
  )
}

export default App
