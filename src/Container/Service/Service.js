import React from 'react';

function Service(props) {
    return (


        <div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative mb-5">Best Services We Provide For Our Clients</h1>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel service-carousel">
                                <div className="service-item">
                                    <div className="service-img mx-auto">
                                        <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-1.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                                        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Quality Maintain</h5>
                                        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                        <a href className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <div className="service-img mx-auto">
                                        <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-2.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                                        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Individual Approach</h5>
                                        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                        <a href className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <div className="service-img mx-auto">
                                        <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-3.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                                        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Celebration Ice Cream</h5>
                                        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                        <a href className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <div className="service-img mx-auto">
                                        <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-4.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: '-75px' }}>
                                        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Delivery To Any Point</h5>
                                        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                        <a href className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative text-center mb-5">Clients Say About Our Famous Ice Cream</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt />
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt />
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt />
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;