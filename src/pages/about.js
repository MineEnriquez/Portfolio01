import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Strong roots, Strong Worker
                  </span>
                  <span className="section-heading-lower">About me</span>
                </h2>
                <p>

                  I was born and raised in Mexico,
                  but I moved to the US in 2000 and
                  ever since I have lived mostly around
                  the Seattle area.

                  Back in Mexico, I completed my degree
                  in Computer Systems Engineering
                  and my specialty in Object Oriented Databases.

                  I have a passion for technology, robotics, cybernetics, Analytics, ML, and  AI.
                  Additionally I have special interest in Astronomy.
                </p>
                <p className="mb-0">

                  In the past I've worked for Microsoft (for more than 12 years) both as full time and as a vendor.
                  While being here, I have participated in projects with Windows, Windows Phone, MSN, Office Engineering,
                  Office Online, LCA IT, Microsoft Stores, Cortana Intelligence, and Research AI.
                  During this journey, I have met amazing people and contributed to the making of great products.

                  I am married, and I have two kids (twins) Daniel and Stephanie, and a tiny dog, Willy. When time permits,
                  we enjoy hiking, running, swimming or going to the movies and of course watching football, go Seahawks!.
                  We visit Mexico at least once a year during Christmas time,
                  and whenever possible we spend New Year’s eve in one of the country’s hot enchanting beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
