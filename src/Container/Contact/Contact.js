import React from 'react';

function Contact(props) {
    return (
<div className="container-fluid py-5">
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h1 className="section-title position-relative text-center mb-5">Contact Us For Any Query</h1>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <div className="contact-form bg-light rounded p-5">
          <div id="success" />
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="form-row">
              <div className="col-sm-6 control-group">
                <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                <p className="help-block text-danger" />
              </div>
              <div className="col-sm-6 control-group">
                <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea className="form-control p-4" rows={6} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
              <p className="help-block text-danger" />
            </div>
            <div>
              <button className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default Contact;