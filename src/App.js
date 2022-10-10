import React from 'react'
import {Routes,Route, useNavigate} from "react-router-dom"
import {data} from "./data/data"
import Register from "./components/Register"
import FormPage from "./components/FormPage"
import Layout from "./components/Layout"


function App() {

  const navigate = useNavigate();
  const register = data

  const handleClick = () => ( navigate("/wallets"))
  const handleLink = (title)=> {
    const originalText = `${title}`
    const newTitle = originalText.includes(' Wallet') ?  originalText.replace(/ Wallet| /g, "").toLowerCase() : originalText.replace(/ /g, "").toLowerCase()
    navigate(`/wallet/register/${newTitle}`)
  }
  return (
    <Routes>
      <Route path="/" exact element={<Layout onToggled={handleClick} />}/>
      <Route path="wallets" element= { <Register registers={register} onLink={handleLink}/>}/>
      <Route path="wallet/register/:newTitle" element={ <FormPage/>}/>
    </Routes>
  );
}
export default App;
