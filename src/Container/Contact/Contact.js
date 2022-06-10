import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';



function Contact(props) {
  let contact = {
    name: yup.string().required('please enter name'),
    email: yup.string().required('please enter email').email('enter valid email'),
    subject: yup.string().required('please enter subject'),
    message: yup.string().required('please enter message')
  }

  let schema = yup.object().shape("contact");
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      handlesubmit(values)
    },
  });
  const handlesubmit = () => {
    let localdata = JSON.parse(localStorage.getItem("content"));
       localStorage.setItem("content".JSON.stringify(localdata))
    
  }
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
              <Formik value={formik}>
                <Form onSubmit={formik.handleSubmit} name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input 
                      type="text" 
                      className="form-control p-4" 
                      id="name" 
                      placeholder="Your Name" 
                      onChange={formik.handleChange}
                      />
                      {
                        formik.errors.name && formik.touched.name ? <p>{formik.errors.name} </p> : null
                      }
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-6 control-group">
                      <input 
                      type="email"
                       className="form-control p-4" 
                       id="email"
                      placeholder="Your Email"
                      onChange={formik.handleChange}
                    
                         />
                           {
                        formik.errors.email && formik.touched.email ? <p>{formik.errors.email} </p> : null
                      }
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <input 
               
                    type="text" 
                    className="form-control p-4" 
                    id="subject" 
                    placeholder="Subject" 
                    onChange={formik.handleChange}

                    />
                       {
                        formik.errors.subject && formik.touched.subject ? <p>{formik.errors.subject} </p> : ''
                      }
                    
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea 
                    className="form-control p-4" 
                    rows={6} id="message"
                     placeholder="Message" 
                      defaultValue={""}
                      onChange={formik.handleChange}

                    />
                       {
                        formik.errors.message && formik.touched.message ? <p>{formik.errors.message} </p> : ''
                      }
                    
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Contact;