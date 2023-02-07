import { Route, Routes, Navigate } from "react-router-dom"

import{MarvelPage} from "../../heroes/pages/MarvelPage"
import {DCpages} from "../../heroes/pages/DCpages"
import { SearchPage } from "../pages/SearchPage"
import {HeroPage} from "../pages/HeroPage"


export const HeroesRoutes = () => {
  return (
    <>
  <div className="container">
       <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path="dc" element={<DCpages/>}/>

            <Route path='search' element={<SearchPage/>}/>
            <Route path='hero/:id' element={<HeroPage/>}/> 

            <Route path="/" element={<Navigate to="/marvel"/>}/>
        </Routes>

  </div>

    
        
    </>

  )
}
