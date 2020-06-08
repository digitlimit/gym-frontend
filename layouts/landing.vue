<template>
  <div class="landing-layout">
    <div id="mobile-menu-overlay"></div>

    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h3 class="font-weight-bold title-text">Gym</h3>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="mdi mdi-menu"> </i></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center">
<!--            <img src="images/logo-dark.svg" class="logo-mobile-menu" alt="logo">-->
            <a href="javascript:;" class="close-menu"><i class="mdi mdi-close"></i></a>
          </div>

          <ul class="navbar-nav ml-auto align-items-center">
            <li class="nav-item active">
              <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Sign in</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-success" href="#contact">Join</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="page-body-wrapper">
      <section id="home" class="home">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="main-banner">
                <div class="d-sm-flex justify-content-between">
                  <div data-aos="zoom-in-up">
                    <div class="banner-title">
                      <h3 class="font-weight-medium">No Pain. No Gain.
                        Time to carve out yourself
                      </h3>
                    </div>
                    <p class="mt-3">
                      Join the best gym outfit. Get good result and keep fit
                    </p>
                    <a href="#" class="btn btn-secondary mt-3">Join Now</a>
                  </div>
                  <div class="mt-5 mt-lg-0" style="max-width: 50%; ">
                    <img src="~assets/landing/images/gym-white.svg" alt="marsmello" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="pricing-list" id="plans">
        <div class="container">
          <div class="row" data-aos="fade-up" data-aos-offset="-500">
            <div class="col-sm-12">
              <div class="d-sm-flex justify-content-between align-items-center mb-2">
                <div>
                  <h3 class="font-weight-medium text-dark ">Choose a membership plan</h3>
                </div>

                <div class="mb-5 mb-lg-0 mt-3 mt-lg-0">
                  <div class="d-flex align-items-center">
                    <p class="mr-2 font-weight-medium monthly text-active check-box-label">Monthly</p>
                    <label class="toggle-switch toggle-switch">
                      <input type="checkbox" checked  id="toggle-switch">
                      <span class="toggle-slider round"></span>
                    </label>
                    <p class="ml-2 font-weight-medium yearly check-box-label">Yearly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row"  data-aos="fade-up" data-aos-offset="-300">
            <div class="col-sm-4">
              <div class="pricing-box">

<!--                <img src="images/starter.svg" alt="starter">-->

                <h6 class="font-weight-medium title-text">Solo</h6>
                <h1 class="text-amount mb-4 mt-2">12, 000</h1>
                <ul class="pricing-list">
                  <li>Tuesdays and Thursdays</li>
                  <li>Access to pool - No</li>
                  <li>Access to medicals - No</li>
                  <li>Access to a Coach - No</li>
                </ul>
                <a href="#" class="btn btn-outline-primary">Purchase Now</a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="pricing-box selected">
<!--                <img src="images/proffessional.svg" alt="starter">-->
                <h6 class="font-weight-medium title-text">Smart</h6>
                <h1 class="text-amount mb-4 mt-2">20, 000</h1>
                <ul class="pricing-list">
                  <li>Monday - Friday</li>
                  <li>Access to pool - No</li>
                  <li>Access to medicals - No</li>
                  <li>Access to a Coach - Yes</li>
                </ul>
                <a href="#" class="btn btn-outline-primary">Purchase Now</a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="pricing-box">
<!--                <img src="images/premium.svg" alt="starter">-->
                <h6 class="font-weight-medium title-text">Bossman</h6>
                <h1 class="text-amount mb-4 mt-2">50, 000</h1>
                <ul class="pricing-list">
                  <li>Monday - Sunday</li>
                  <li>Access to pool - Yes</li>
                  <li>Access to medicals - Yes</li>
                  <li>Access to a Coach - Yes</li>
                </ul>
                <a href="#" class="btn btn-outline-primary">Purchase Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer style="margin-top: 100px;" class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <address>
                <p>143 castle road 517</p>
                <p class="mb-4">district, kiyev port south Canada</p>
                <div class="d-flex align-items-center">
                  <p class="mr-4 mb-0">+3 123 456 789</p>
                  <a href="mailto:info@yourmail.com" class="footer-link">info@yourmail.com</a>
                </div>
              </address>
              <div class="social-icons">
                <h6 class="footer-title font-weight-bold">
                  Social Share
                </h6>
                <div class="d-flex">
                  <a href="#"><i class="mdi mdi-github-circle"></i></a>
                  <a href="#"><i class="mdi mdi-facebook-box"></i></a>
                  <a href="#"><i class="mdi mdi-twitter"></i></a>
                  <a href="#"><i class="mdi mdi-dribbble"></i></a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-4">
                </div>
                <div class="col-sm-4">
                </div>
                <div class="col-sm-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <h3 class="font-weight-bold">Gym</h3>
              <p class="mb-0 text-small pt-1">© 2019-2020 <a href="" class="text-white" target="_blank">Gym</a>. All rights reserved.</p>
            </div>
            <div>
              <div class="d-flex">
                <a href="#" class="text-small text-white mx-2 footer-link">Privacy Policy </a>
                <a href="#" class="text-small text-white mx-2 footer-link">Customer Support </a>
                <a href="#" class="text-small text-white mx-2 footer-link">Careers </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {

    components: {
    },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      script: [
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
      ],
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-target': '.navbar',
        'data-offset': '50'
      }
    }
  }
</script>

<style>
  @import '~assets/landing/vendors/mdi/css/materialdesignicons.min.css';
  @import '~assets/landing/css/style.css';
</style>
