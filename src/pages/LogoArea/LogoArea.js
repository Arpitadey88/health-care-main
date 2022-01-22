import React from 'react';
import logo from '../../img/logo.png';

const LogoArea = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center">COUNCIL FOR ALLIED AND HEALTHCARE PROFESSIONALS</h2>
            <div class="d-flex justify-content-center py-2">
                <div className="mt-3">
                    <h5 >Registered Under Govt. of India Ministry of Corporate <br /> Affairs Central Registration Center. </h5>
                    <h6>New Delhi, India License Under Section 8(1), of the companies Act. </h6>
                    <p>2013 Incorporation Rules, 2014 CI No- U85300DL2021NPL383029</p>
                </div>

                <div>
                    <img src={logo} className="img-fluid" alt="..." width="150" />
                </div>
            </div>

        </div>
    );
};

export default LogoArea;