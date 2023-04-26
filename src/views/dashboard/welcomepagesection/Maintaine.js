import React from 'react'
import { Card } from 'react-bootstrap'
import { Maintain } from '../../../mockup/Mockup'

const Maintaine = () => {
  return (
    <div className="container">
            <div className="text-center">
              <p
                className="text-uppercase text-warning text-center fw-semibold"
                style={{ letterSpacing: "3px" }}
              >
                Keep Your Applications Always Shine
              </p>
              <h2>Types of Apps We Maintain At Amplework Software</h2>
              <p className="px-5 py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="d-flex flex-wrap justify-content-center ">
              {Maintain.map((varient, key) => (
                <Card
                  style={{ width: "18rem" }}
                  className="mx-2 my-3 cardshover"
                >
                  <Card.Body className="text-center ">
                    <div className="defaultshowdata ">
                      <div className="imagedivheight">
                        <img
                          src={varient.icon}
                          alt=""
                          className=" mx-auto img-fluid"
                        />
                      </div>
                      <Card.Title className=" pt-2">{varient.text}</Card.Title>
                    </div>

                    <div className="hovershowdata text-light">
                      <p className=" fs-5">{varient.text}</p>
                      <p className="">{varient.smalltext}</p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
  )
}

export default Maintaine
