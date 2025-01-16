import { useState } from 'react';
// import viteLogo from '/vite.svg';
// import reactLogo from './assets/react.svg'

const Content = () => {

  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col">

      <h1 className='mt-3'>Vite + React</h1>

      <div className="card flex center flex-col">

        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </div>
  )
};

export default Content