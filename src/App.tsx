import './App.css'

function App() {
  let count = 0
  const add = () => {
    count++
    console.log('count=', count)
  }

  return (
    <>
      <h1>카운터</h1>
      <button onClick={add}>증가</button>
    </>
  )
}

export default App
