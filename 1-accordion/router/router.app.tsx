import React from 'react'

type Props = {
    hola: string,
}

const App = ({hola}: Props) => {
return (
    <>
        <div>router.app</div>
        <h1>{hola}</h1>
    </>
    
)
}

export default App