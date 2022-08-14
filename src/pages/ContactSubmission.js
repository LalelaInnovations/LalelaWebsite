import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';

import './ContactSubmission.css';

// Contact Message Submission and Redirection Page
export default function ContactSubmission() {

    return (
    <div className='page-this'>
        <div class="card-this card text-center border-success container">
            <h5 class="card-header bg-light p-3 fs-2">Thank you!</h5>
            <div class="card-body">
                <h5 class="card-title">Submission successful</h5>
                <p class="card-text">
                    You should be recieving an automated email to confirm your message sent. 
                    We will get back to you as soon as possible.
                </p>
                <p class="signature">♥️ Lalela Innovations</p>
                <Link to="/" className="text-center btn btn-primary" id="return-btn">
                    Return to Website
                </Link>
            </div>
        </div>
    </div>
    )
}
