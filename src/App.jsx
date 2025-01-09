import Tile from './Tile'
import appsData from './appsData'


function App() {

  const renderTiles = () => {
    return appsData.map(app => {
      return <Tile name={app.name} codeToCopy={app.codeToCopy} url={app.url} key={Math.random()}/>
    })
  }

  return (
    <main>
      <header>
      <h1>Kayla's WorkOS Samples</h1>
      </header>
      <nav>
        {renderTiles()}
      </nav>
    </main>
  )
}

export default App
