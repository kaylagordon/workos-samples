import Tile from './Tile'
import Profile from './Profile'
import appsData from './appsData'
import dashboardData from './dashboardData'

function App() {

  const renderTiles = () => {
    return appsData.map(app => {
      return <Tile appInfo={app} key={Math.random()}/>
    })
  }

  const renderDashboardInfo = () => {
    return dashboardData.map(item => {
      return <Profile dashInfo={item}/>
    })
  }

  return (
    <main>
      <header>
      <h1>Kayla's WorkOS Samples</h1>
      </header>
      <section className='profile'>
        {renderDashboardInfo()}
      </section>
      <section className='tiles'>
        {renderTiles()}
      </section>
    </main>
  )
}

export default App
