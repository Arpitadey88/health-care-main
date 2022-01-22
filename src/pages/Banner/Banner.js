import React from 'react';
import img from '../../img/new.jpg';
import list from '../../img/list.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container'>
            <div className="text ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="px-3">
                    <h5 className="fs-3 text-start my-2">Overview</h5>
                    <p className="text-start py-2">Council for Allied and Healthcare Professionals Registered under Government of India, Ministry of Corporate Affairs, Central Registration Center. Pursuant to sub section(2) of Section 7 and sub section (1) of section 8 of the Companies Act, 2013 (18 of 2013) a rule 10 of the Companies (Incorporation) Rules, 2014.
                        The Council established for the Allied Healthcare Professionals in India and their profiles, roles and the list of allied healthcare professionals given in this article are strictly as per Allied Healthcare Professions Bill. Allied healthcare professionals have a very important role to play from primary healthcare to emergency support. Proper recognition and Regulation were the need of hour. The Allied and Healthcare Professions Bill 2018 is a step in that direction.
                        Definition according to The Allied and Healthcare Professions Bill 2018.
                        “Allied Health Professional includes an Associate, Technician or Technologist who is trained to perform any technical and practical task to support diagnosis and treatment of illness, disease, injury or impairment, and to support implementation of any healthcare treatment and referral plan, recommended by a medical, nursing or any other healthcare professional, and, who has obtained any qualification of diploma or degree under this Act, the duration of which shall not be less than two thousand hours.” Allied health care professionals are distinct from nursing, Medicine and Pharmacy.
                        Council for Allied and Healthcare Professionals aims to provide registration under one name for multidimensional growth in education, career and skills building. Council has been formed for the common purpose of skilled manpower development for the employment generation. Council established to dedicate serve the nation to meet the demand for skilled workforce in the skills-based work healthcare and allied industry in India. Ensure sector capacity building for availability of trained and skilled manpower across industry segments and organization levels.
                        An Allied and Healthcare Professional who responds to Medical Emergencies at mild and moderate to severe health conditions. They mainly work as part of the Emergency Medical Services (EMS), most often in ambulances. The scope of practice of a paramedic varies among countries, but generally includes autonomous decision making around the emergency care of patients.
                        It will be our moral duty to honor the spirit of encouragement and excitement that will contribute to the field of education and technical education. It is our goal to develop education Institutions in the infrastructure to service level to make better sanitation and hygienic healthy and disease-free life of those who live in all society and to provide technical education and provide them the means of livelihood to connect with the mainstream of the country's development. Council for Allied and Healthcare Professionals is a self-financed Private Autonomous registered Council.</p>
                </div>
                <div className="py-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">AIM AND OBJECTIVE OF COUNCIL</h5>
                                <ul>
                                    <li>To Provide Registration</li>
                                    <li>To Provide Employment</li>
                                    <li>To Provide skills Development Training and Education</li>
                                    <li>To Provide skilled manpower to the Allied and healthcare industry</li>
                                    <li>To Public healthcare support by collaborating with various public and private departments.</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={list} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text text-center my-4 py-3 px-3">
                <h2 className="text-start my-2">Important Links About The Bill Passed</h2>
                <a href="">Bill passed in Rajya Sabha- Commission for Allied and Healthcare Professionals- Bill</a>
                <br />
                <a href="">Commission for Allied and Healthcare Professionals- Gazette</a>
                <br />
                <a href="">Council for Allied and Healthcare Professionals</a>
            </div>


        </div>
    );
};

export default Banner;