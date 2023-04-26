import React from 'react'
import { Active } from '../../../mockup/Mockup'

const Activities = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-12 col-lg-6 pt-4">
        <h3 className="pb-3">
          Amplework's Targeted Activities For Application Maintenance
          Support Services
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </p>
        <ul className="px-3 ulcolorchange">
          <li>Amplework offers hire.</li>
          <li>dedicated Full Stack.</li>
          <li>developers who possess.</li>
        </ul>
      </div>
      <div className="col-sm-12 col-lg-6">
        <div className="row">
          {Active.map((varient, key) => (
            <div className="col-sm-12 col-md-6">
              <div className="d-flex my-3 ">
                <div
                  className="iconshadow p-3 rounded border border-1"
                  style={{
                    backgroundColor: varient.bgcolor,
                    boxShadow: varient.backbgcolor,
                  }}
                >
                  <img
                    src={varient.logo}
                    alt="no pic "
                    className="img-fluid"
                  />
                </div>
                <div className="align-text-center">
                  <p className="px-5">{varient.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Activities
