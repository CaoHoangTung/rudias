<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="./assets/bootstrap_4_4_1/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="./assets/bootstrap_4_4_1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/global.css">
    <link rel="stylesheet" href="./assets/css/home.css">
    <link href="https://fonts.googleapis.com/css?family=Saira&display=swap" rel="stylesheet">

    <title>Rudias</title>
</head>

<body>
    <div id="home"></div>
    <nav class="rnav navbar navbar-expand-md navbar-light bg-light">
        <a href="home.html" class="navbar-brand"><img src="assets/img/icon.png"><span
                class="rbrand-name">Rudias</span></a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ml-auto smooth-scroll">
                <a id="link-home" targetid="#header" href="#header" class="nav-item rnav-item nav-link active">Home</a>
                <a id="link-services" targetid="#services" href="#services" class="nav-item rnav-item nav-link">Services</a id="link-home">
                <a id="link-team" href="team.html" class="nav-item rnav-item nav-link">Team</a id="link-home">
                <a id="link-contact" targetid="#contact" href="#contact" class="nav-item rnav-item nav-link">Contact</a id="link-home">
            </div>
        </div>
    </nav>
    <div id="page-content">
        <div id="header">
            <img id="header-img" src="assets/img/header.png">
            <h1 id="header-text">Make your ideas<br><span style="color: #FF5024">come true!</span></h1>
        </div>

        <div id="services">
            <h1 class="section-title">Our products</h1>
            <div class="container products">
                <div class="row product">
                    <div class="col-sm-7 product-img">
                        <img src="assets/img/web_solutions.png">
                    </div>
                    <div class="col-sm-5 product-text">
                        <h2 class="product-title">Web solutions</h2>
                        <p class="product-description">We provide all kind of website services like ecommerce websites,
                            platform, web app, </p>
                    </div>
                </div>
                <div class="row product">
                    <div class="col-sm-5 product-text">
                        <h2 class="product-title">Algorithm optimization</h2>
                        <p class="product-description">We provide all kind of website services like ecommerce websites,
                            platform, web app, </p>
                    </div>
                    <div class="col-sm-7 product-img">
                        <img src="assets/img/algorithm_optimization.png">
                    </div>
                </div>
                <div class="row product">
                    <div class="col-sm-7 product-img">
                        <img src="assets/img/mobile_application.png">
                    </div>
                    <div class="col-sm-5 product-text">
                        <h2 class="product-title">Mobile applications</h2>
                        <p class="product-description">We provide all kind of website services like ecommerce websites,
                            platform, web app, </p>
                    </div>
                </div>
            </div>
        </div>

        <div id="work-with-us">
            <h1 class="section-title">Work with us</h1>
            <p class="section-subtitle">Find out more about prices and services</p>
            <button>Now</button>
        </div>

        <div id="testimonials">
            <h1 class="section-title">What they say</h1>

            <!--Carousel Wrapper-->
            <div id="carousel-testimonials" class="carousel slide" data-ride="carousel">
                <!--Indicators-->
                <ol class="carousel-indicators">
                    <li data-target="#carousel-testimonials" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-testimonials" data-slide-to="1"></li>
                    <li data-target="#carousel-testimonials" data-slide-to="2"></li>
                </ol>
                <!--/.Indicators-->
                <!--Slides-->
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="view row">
                            <div class="col-10 offset-1 col-md-6 offset-md-3 col-sm-8 offset-sm-2 testimonial-item">
                                <img class="testimonial-img d-block1" src="./assets/img/testimonial1.png"
                                    alt="First slide">
                                <div class="mask rgba-black-light"></div>
                                <div class="testimonial-text">
                                    <p>“This is a real young enthusiasm team I like. They are wild, smart and really
                                        fast. Working with them make me feel really happy and sastify.”</p>
                                </div>
                                <div class="testimonial-name">
                                    <h3>John Doe</h3>
                                </div>
                                <div class="testimonial-role">
                                    <h3>Customer</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="view row">
                            <div class="col-10 offset-1 col-md-6 offset-md-3 col-sm-8 offset-sm-2 testimonial-item">
                                <img class="testimonial-img d-block1" src="./assets/img/testimonial1.png"
                                    alt="First slide">
                                <div class="mask rgba-black-light"></div>
                                <div class="testimonial-text">
                                    <p>“This is a real young enthusiasm team I like. They are wild, smart and really
                                        fast. Working with them make me feel really happy and sastify.”</p>
                                </div>
                                <div class="testimonial-name">
                                    <h3>Michael Carrick</h3>
                                </div>

                                <div class="testimonial-role">
                                    <h3>Designer</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="view row">
                            <div class="col-10 offset-1 col-md-6 offset-md-3 col-sm-8 offset-sm-2 testimonial-item">
                                <img class="testimonial-img d-block1" src="./assets/img/testimonial1.png"
                                    alt="First slide">
                                <div class="mask rgba-black-light"></div>
                                <div class="testimonial-text">
                                    <p>“This is a real young enthusiasm team I like. They are wild, smart and really
                                        fast. Working with them make me feel really happy and sastify.”</p>
                                </div>
                                <div class="testimonial-name">
                                    <h3>Steven Tran</h3>
                                </div>

                                <div class="testimonial-role">
                                    <h3>Project Manager</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!--/.Slides-->
                <!--Controls-->
                <a class="carousel-control-prev" href="#carousel-testimonials" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-testimonials" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                <!--/.Controls-->
            </div>
            <!--/.Carousel Wrapper-->


        </div>

        <div id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-10 offset-1 col-sm-4 offset-sm-1 col-md-3 offset-md-2" id="contact-us">
                        <div class="contact-section-title">
                            <h4> Contact us</h4>
                        </div>
                        <br><br>
                        <h5><span style="color:#BDBDBD">Direct contact</span></h5>
                        <h6><span style="color: #F2F2F2">+84 90 123 4567</span></h6>
                        <h6><span style="color: #F2F2F2">contact@rudias.net</span></h6>
                        <br>
                        <h5><span style="color:#BDBDBD">Visit us</span></h5>
                        <h6><span style="color: #F2F2F2">Level 4, No1 Thai Ha, Vietnam</span></h6>
                        <br>
                        <a href="https://fb.com"><img src="assets/img/icon_fb.png"></a>
                        <a href="https://fb.com"><img src="assets/img/icon_linkedin.png"></a>
                    </div>

                    <div class="col-10 offset-1 col-sm-4 offset-sm-1 col-md-3 offset-md-2" id="message-us">
                        <div class="contact-section-title">
                            <h4> Message us</h4>
                        </div>
                        <br><br>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control inp" placeholder="Your name*">
                                <input type="email" class="form-control inp" placeholder="Your email*">
                                <textarea class="form-control inp" placeholder="Your message here"></textarea>
                                <input id="message-us-submit-btn" class="form-control inp" type="submit" value="Send">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a href="home.html" class="navbar-brand"><img src="assets/img/icon.png"><span
                    class="rbrand-name">Rudias</span></a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ml-auto smooth-scroll">
                    <p class="nav-item">Copyright &copy Rudias 2020</p>
                </div>
            </div>
        </nav>
    </footer>


    <script src="./assets/js/global.js"></script>
    <script src="./assets/js/home.js"></script>
</body>

</html>