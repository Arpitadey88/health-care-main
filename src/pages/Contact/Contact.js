import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container content-area">
            <div className=''>
                <h3 className="text-center my-3 fw-bold"> CONTACT US</h3>
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;