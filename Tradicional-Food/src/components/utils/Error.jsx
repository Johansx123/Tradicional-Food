export function Error({ error }) {
  return (

    error ?
      <h2 style={{ backgroundColor: 'rgba(255, 0, 0, 40%)', padding: '1em', borderRadius: '.2em', color: 'rgb(255,0,0)', fontFamily: 'sans-serif' }}>{error}</h2>
      : <></>
  );

}
