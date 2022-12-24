import React from 'react'
import Chart from '../../Components/chart/Chart'
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import { userData } from "../../Components/dummyData";


const Home = () => {
  return (
    <div className='home' >
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>    </div>
  )
}

export default Home
