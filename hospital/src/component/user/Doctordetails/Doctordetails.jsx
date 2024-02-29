import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Doctordetails() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/save/view-dutydoctors")
      .then((res) => {
        console.log("res", res);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <section className="ftco-section">
      <div className="container-fluid px-5">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section" data-aos="fade-up">
            <h2 className="mb-4"><span className='text-primary'>Our</span> Qualified Doctors</h2>
            <p>
              Separated they live in. A small river named Duden flows by their place
              and supplies it with the necessary regelialia. It is a paradisematic
              country
            </p>
          </div>
        </div>
        {data && data.map((item, index) => (
          index % 4 === 0 && (
            <div className="row" key={index}>
              {data.slice(index, index + 4).map((doctor, doctorIndex) => (
                <div className="col-md-6 col-lg-3" data-aos="fade-up" key={doctorIndex}>
                  <div className="staff">
                    <div className="img-wrap d-flex align-items-stretch">
                      <div
                        className="img align-self-stretch"
                        style={{ backgroundImage: `url(/uploads/${doctor.profileImage})` }}
                      />
                    </div>
                    <div className="text pt-3 text-center">
                      <h3 className="mb-2">Dr. {doctor.name}</h3>
                      <span className="position mb-2">{doctor.department}</span>
                      <div className="faded">
                       
                        <div className="doctor-info">
                          <span className="doctor-info-item"><span className='text-primary p-2 fs-6'>consultation :</span> {doctor.startingTime} to {doctor.endTime}</span><br></br>
                          <span className="doctor-info-item"><span className='text-primary p-2 fs-6'>Fees : </span>{doctor.fees}</span>
                        </div>
                        <ul className="ftco-social text-center">
                        <p>
                          I am an ambitious workaholic, but apart from that, pretty simple
                          person.
                        </p>
                          <li className="">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="" data-aos="fade-up">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="" data-aos="fade-up">
                            <a href="#">
                              <span className="icon-google-plus" />
                            </a>
                          </li>
                          <li className="" data-aos="fade-up">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <p>
                          <Link  to={`/appointment/${doctor.docid}`} className="btn btn-primary px-3 py-2 mt-2">
                            Book now
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ))}
      </div>
    </section>
  );
}

export default Doctordetails;
