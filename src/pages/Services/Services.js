import React from 'react';
import img1 from '../../img/service2.jpg';
import img2 from '../../img/health.jpg';
import './Services.css'

const Services = () => {
    return (
        <div className="container">
            <div className="background px-3 pt-2" >
                <h2>Our Services</h2>
                <p>To establish and run allied and healthcare education and research centers in regular or distance or online mode in India and Abroad independently. or in collaboration with similar organizations/institutions/NGO/Associations. Also, to conduct Diploma and degree and certifications under established colleges or institutions under the council.
                    To give membership registration by issuing membership card and registration certificate under annual membership and life membership provision and maintain membership-register for members to create and maintain an up-to-date online and live Central Register with details of academic qualifications institutions, training, skill and competencies of allied and healthcare professionals related to their profession as specified in the Schedule.
                    To regulate and maintain the standards of education and services by allied and healthcare professionals, assessment of institutions, maintenance of a Central Register and State Register and creation of a system to improve access, research and development and adoption of latest scientific advancement in allied and healthcare professionals.
                </p>
                <div className="my-4 py-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img1} className="rounded-start pt-2 pe-2" alt="..." height="322px" width="385px" />
                        </div>
                        <div className="col-md-8">
                            <p className="px-5">To spread and conduct awareness about the bill passed and for regulation and maintenance of Standards of education and services by allied and Healthcare professional assessment of Institutions maintenance of Central resistor and state resistor and creation of a system to improve access research and development and adoption of latest scientific advancement in various healthcare streams.
                                Council for Allied and Healthcare Professionals established to support the bill passed by the Central Government in favor of Allied and Healthcare Professionals including Life Sciences Professionals, Trauma and Burn care professionals, Physiotherapists, Nutrition Sciences professionals, Ophthalmic professionals, Occupational Therapy Professionals, Behavioral Health Sciences Professionals, Primary community and other miscellaneous care professionals, Medical Radiology Imaging and Therapeutic Technology Professionals, Medical Laboratory Sciences Professionals, Physician associates or Physician Assistant, Cardio-Vascular, Neuro Science and pulmonary technology Professionals, Renal Technology Professionals, Surgical and Anesthesia related technology professionals.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <img src={img2} className="card-img-top" alt="..." height="420px" />
                    <div className="card-body">
                        <h2>PLEASE READ ALL THE INSTRUCTION CAREFULLY BEFORE PROCEEDING APPLICATION</h2>
                        <ul>
                            <li>Read the checklist carefully and follow the instructions for submission of your application. If any personal and educational information or other formal requirement, which are not correctly submitted by the applicant will not be accepted.</li>
                            <li>The Registration Committee meet once in last week of month to discuss applications. Your wait time depend on the date your application submitted.</li>
                            <li>The Registration fee will be charged prior to the Registration Committee meeting through online method.</li>
                            <li>The application for registration fee includes a non-refundable scrutiny fee (INR 12000/- only).</li>
                            <li>Registration number indicate Registration under COUNCIL FOR ALLIED AND HEALTHCARE PROFESSIONALS.</li>
                            <li>Work under any Allied and Healthcare Profession mentioned under the bill passed by Central government, government of India in regards the establishment of central council for allied and healthcare professionals' registration. Ref. CG-DL-E-28032021-226213.</li>
                            <br />
                            <h5 className="fw-bold"> The national commission for allied and healthcare professionals act, 2021.</h5>
                        </ul>
                    </div>

                </div>

                <div className='px-4 py-4 border-dark border-top border-5'>
                    <h4 className='fw-bold'>Registration-Cum-Membership Certificate (RCMC)</h4>
                    <p> How to Become a Member of COUNCIL FOR ALLIED AND HEALTHCARE PROFESSIONALS
                        How to Become a Member of CAHP
                        CAHP's membership rules are governed by the Governing body of the organization defined under Memorandum and Articles of Organization.
                        Registration-cum-Membership Certificate (RCMC)
                        As per the registration, any healthcare professional can apply for the Registration-cum-Membership Certificate (RCMC) for availing various benefits under the Council. For registration purposes, CAHP has been recognized by the Government as an Allied and Healthcare Promotion Council.
                        Applying for RCMC
                        An Allied and Healthcare Professional desiring to obtain an RCMC, has to declare his/her main line of purpose in the application made to the Healthcare Promotion Council relating to that line of practice.
                        Service Exporters
                        CAHPs the registering authority for Service provided by Allied and Healthcare Professionals and other than services, listed in the Handbook of Procedures
                        Advantages of Membership
                        By registering with CAHP an Allied and Healthcare Professionals as the double advantage of getting the benefits under the Council, as also the benefit of CAHP's services, facilities, credentials, and global reach.
                        A Member, who does not wish to obtain the RCMC and claim benefits under the Foreign Trade Policy, can still be enrolled as a member of CAHP under its Individual Healthcare Category.</p>
                </div>
            </div>

        </div>
    );
};

export default Services;