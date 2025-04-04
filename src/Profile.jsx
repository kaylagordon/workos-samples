function Profile( { dashInfo }) {
  const { name, valueToCopy } = dashInfo;

  const copyInfo = () => {
    navigator.clipboard.writeText(valueToCopy);
  }

  return (
    <section className='profile-line-items'>
      <label>{name}:</label>
      <button className='profile-copy-button' onClick={copyInfo}>{`${valueToCopy}`}</button>
    </section>
  )
}

export default Profile;