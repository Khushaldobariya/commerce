import React from 'react';

function Home(props) {
    return (
        <div>
            <div className="container-fluid p-0 mb-5 pb-5">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h4 className="text-white text-uppercase mb-md-3">Traditional &amp; Delicious</h4>
                                    <h1 className="display-3 text-white mb-md-4">Traditional Ice Cream Since 1950</h1>
                                    <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h4 className="text-white text-uppercase mb-md-3">Traditional &amp; Delicious</h4>
                                    <h1 className="display-3 text-white mb-md-4">Made From Our Own Organic Milk</h1>
                                    <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-secondary px-0" style={{ width: 45, height: 45 }}>
                            <span className="carousel-control-prev-icon mb-n1" />
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-secondary px-0" style={{ width: 45, height: 45 }}>
                            <span className="carousel-control-next-icon mb-n1" />
                        </div>
                    </a>
                </div>
            </div>
            {/* Carousel End */}
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <h1 className="section-title position-relative text-center mb-5">Traditional &amp; Delicious Ice Cream Since 1950</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 py-5">
                            <h4 className="font-weight-bold mb-3">About Us</h4>
                            <h5 className="text-muted mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                            <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                            <a href className="btn btn-secondary mt-2">Learn More</a>
                        </div>
                        <div className="col-lg-4" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100 rounded overflow-hidden">
                                <img className="position-absolute w-100 h-100" src="img/about.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-4 py-5">
                            <h4 className="font-weight-bold mb-3">Our Features</h4>
                            <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
                            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
                            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
                            <a href className="btn btn-primary mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Promotion Start */}
            <div className="container-fluid my-5 py-5 px-0">
                <div className="row bg-primary m-0">
                    <div className="col-md-6 px-0" style={{ minHeight: 500 }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/promotion.jpg" style={{ objectFit: 'cover' }} />
                            <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                <span />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 py-5 py-md-0 px-0">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 100, height: 100 }}>
                                <h3 className="font-weight-bold text-secondary mb-0">$199</h3>
                            </div>
                            <h3 className="font-weight-bold text-white mt-3 mb-4">Chocolate Ice Cream</h3>
                            <p className="text-white mb-4">Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
                                justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                            <a href className="btn btn-secondary py-3 px-5 mt-2">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Promotion End */}
            {/* Video Modal Start */}
            <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            {/* 16:9 aspect ratio */}
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Modal End */}
            {/* Services Start */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-1.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-2.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-3.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-4.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-5.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-1.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-2.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-3.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <a href className="btn btn-primary py-3 px-5">Load More</a>
                    </div>
                </div>
            </div>
            {/* Services End */}
          
        </div>

    );
}

export default Home;