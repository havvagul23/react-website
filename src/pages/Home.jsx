import React, { useEffect, useState } from 'react'
import {ProductCard, Products} from '../products/'


function Home({user}) {
 

  return (
    <>
    <h1>Ana Sayfa</h1>
    <Products user={user}/>
    </>
  )
}

export default Home
