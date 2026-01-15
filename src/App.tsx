import { useState } from 'react'
import './App.css'
import { Button } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button size="sm" variant="primary" text="Share" />
      <Button size="md" variant="secondary" text="Add Content" />
    </>
  );
}

export default App