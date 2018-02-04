import React from 'react';
import '../css/contact.css';
import '../css/about.css';

const user = "Alex";
const host = "AlexCassell.com"
const link = user + "@" + host;
const Contact  = () => {
    return (
        <div className="contact">
        Email: <a href="mailto:'user + '@' + host'?Subject=Portfolio%20Contact" target="_top"><span className="about__highlighted">{link}</span></a><br />
        Phone Number: <span className="about__highlighted">321-693-0649</span><br />
        Current CV: <a href="http://alexcassell.com/AlexCassellCV.doc"><span className="about__highlighted">Download</span></a>

        <br />
        Contact form coming soon!
        </div>
    );
}

export default Contact;