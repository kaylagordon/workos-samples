

function Tile( { name, codeToCopy, url }) {
  const openApp = () => {
    window.open(url, "_blank", "noopener,noreferrer");
    navigator.clipboard.writeText(codeToCopy);
  }

  return (
    <button className='tile' onClick={openApp}>{name}</button>
  )
}

export default Tile