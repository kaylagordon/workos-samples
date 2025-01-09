

function Tile( { appInfo }) {
  const { category, language, codeToCopy, url } = appInfo;

  const openApp = () => {
    window.open(url, "_blank", "noopener,noreferrer");
    navigator.clipboard.writeText(codeToCopy);
  }

  return (
    <button className='tile' onClick={openApp}>{`${category} (${language})`}</button>
  )
}

export default Tile