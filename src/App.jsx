import { useState } from 'react';

import Navigation from './component/navigation';
import Header from './component/header';
import Content from './component/contentProduct';
import Footer from './component/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navigation/>
        <Header/>
        <Content/>
        <Footer/>

    </>
  )
}

export default App
