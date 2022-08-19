import React from 'react';
import { Link } from 'react-router-dom';

import './ContactSubmission.css';

// Contact Message Submission and Redirection Page
export default function ContactSubmission() {

    return (
    <div className='page-this'>
        <div className="card-this card text-center border-success container">
            <h5 className="card-header bg-light p-3 fs-2">Thank you!</h5>
            <div className="card-body">
                <h5 className="card-title">Submission successful</h5>
                <p className="card-text">
                    You should be recieving an automated email to confirm your message sent. 
                    We will get back to you as soon as possible.
                </p>
                <p className="signature">Lalela Innovations</p>
                <Link to="/" className="text-center btn btn-primary" id="return-btn">
                    Return to Website
                </Link>
            </div>
        </div>
    </div>
    )
}
