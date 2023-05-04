import React from 'react'
import '../support/Support.css'
import Homepagecomponent from '../../component/homepage/Homepagecomponent'
import { SupportMock } from '../../mockup/support&mainteancemockup/SupportMockup'
import LeaveSoftware from './supportsection/LeaveSoftware'
const Support = () => {
  return (
    <div className='page-containe'>
      <Homepagecomponent propsdata={SupportMock}/>
      <section>
        <LeaveSoftware/>
      </section>
    </div>
  )}

export default Support
