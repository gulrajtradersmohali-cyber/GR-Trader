import React from 'react'
import Banner from './Components/PageComponent/Banner'
import WhyChoose from './Components/PageComponent/WhyChoose'
import ExportImportServices from './Components/PageComponent/ExportImportServices'
import MakhanaCategories from './Components/PageComponent/MakhanaCategories'
import ExportImportProcess from './Components/PageComponent/ExportImportProcess'
import OurStats from './Components/PageComponent/OurStats'
import ReadytoTrade from './Components/PageComponent/ReadytoTrade'

const page = () => {
  return (
    <div className=''>
      <Banner />
      <WhyChoose />
      <ExportImportServices />
      <MakhanaCategories />
      <ExportImportProcess />
      <OurStats />
      <ReadytoTrade />
    </div>
  )
}

export default page
