import React from 'react';
import {FaArrowRight, FaStar } from "react-icons/fa";



export default function Content() {

  return (
    <>
      <header className="mx-0">
        <div className="img-h">
          <img src='/images.jpeg' className='w-100' alt=""/>
          <div className="container-fluid con d-flex align-items-center">
            <div className="row">
              <div className="col-12 col-lg-10">
                <h1 className="font">
                  <>We work to help you Build your dream building.</>
                </h1>
                <div className="row my-4 align-items-center justify-content-between">
                  <div className='col-6 col-md-3 col-lg-2 my-lg-3'>
                    <h2 className="text-bold">.1400+</h2>
                    <p>Building has been constructured with us.</p>
                  </div>
                  <div className='col-6 col-md-3 col-lg-2 my-lg-3'>
                    <h2 className="text-bold">.50+</h2>
                    <p>Our clients are spread all over the world.</p>
                  </div>
                  <div className='col-6 col-md-3 col-lg-2 my-lg-3'>
                    <h2 className="text-bold d-flex align-items-center">
                      <span>4.9 </span>
                      <FaStar style={{color: 'orange'}} className='mx-1'/>
                    </h2>
                    <p>Building has been constructured with us.</p>
                  </div>
                  <div className='col-6 col-md-3 col-lg-2 my-lg-3'>
                    <h2 className="text-bold">.1400+</h2>
                    <p>Building has been constructured with us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id='help' className='p-4'></div>
      
      <main className="container">
        <div className="row my-3 align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="font">We have also helped Big companies.</h2>
            <p className="text-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, enim. Officiis, suscipit quod ducimus, fugit quaerat illum veritatis cumque, rerum recusandae in minus numquam blanditiis.</p>
            <p className="m-color"><b>see more</b></p>
          </div>
          <div className="col-11 col-md-6 mx-auto">
            <div className="row">
              <div className="col-6">
                <img src="/logo1.png" className='m-4 text-center logo' alt=""/>
              </div>
              <div className="col-6">
                <img src="/logo3.png" className='m-4 text-center logo' alt=""/>
              </div>
              <div className="col-6">
                <img src="/logo5.png" className='m-4 text-center logo' alt=""/>
              </div>
              <div className="col-6">
                <img src="/logo6.png" className='m-4 text-center logo' alt=""/>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id='services' className='p-4'></div>

      <article>     
        <div className="container">
          <div className="row my-3">
            <h4 className="text-center font mb-4"><b>What can we help for?</b></h4>
            <div className="col-10 col-md-4 mx-auto">
              <div className="card my-3 p-3">
                <div className="number">01</div>
                <h5 className="text-capitalize my-3">home building</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque et molestiae distinctio accusamus labore accusantium!</p>
                <div className="d-flex align-items-center">
                  <div className="text-underline">How I Work</div>
                  <FaArrowRight/>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 mx-auto">
              <div className="card my-3 p-3">
                <div className="number">02</div>
                <h5 className="text-capitalize my-3">office building</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque et molestiae distinctio accusamus labore accusantium!</p>
                <div className="d-flex align-items-center">
                  <div className="text-underline">How I Work</div>
                  <FaArrowRight/>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 mx-auto">
              <div className="card my-3 p-3">
                <div className="number">03</div>
                <h5 className="text-capitalize my-3">rebuilding</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque et molestiae distinctio accusamus labore accusantium!</p>
                <div className="d-flex align-items-center">
                  <div className="text-underline">How I Work</div>
                  <FaArrowRight/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div id='projects' className='p-4'></div>

      <blog>
        <div className="container">
          <div className="row my-3">
            <h5 className="my-3 mx-lg-5"><b>latest project</b></h5>
            <div className="col-12 col-md-6 col-lg-5 mx-auto">
              <div>
                <img src="/h4.jpg" alt="" className="w-100"/>
                <h5 className="my-2"><b>building konohapedia office Indonesia</b></h5>
                <p className="text-muted my-2">office building</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam rerum totam assumenda at delectus officiis quia dolorem, ex tempora quam ad praesentium non et quod, consequatur ipsa pariatur voluptatem.</p>
                <p className="m-color"><b>more details</b></p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mx-auto">
              <div>
                <img src="h8.jpg" alt="" className="w-100"/>
                <h5 className="my-2"><b>building a billinionaire's luxuly house from surabaya</b></h5>
                <p className="text-muted my-2">home building</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquam rerum totam assumenda at delectus officiis quia dolorem, ex tempora quam ad praesentium non et quod, consequatur ipsa pariatur voluptatem.</p>
                <p className="m-color"><b>more details</b></p>
              </div>
            </div>
          </div>
        </div>
      </blog>

      <main className='py-4 my-3 main'>
        <div className="container">
          <div className="text-center">
            <i style={{fontSize: '1.5rem'}} className="text-bold m-color">Arnowlogi </i>
            recieved an Award from IDN Times as the best Architect Agency in Asia.
          </div>
        </div>
      </main>

      <div id='blog' className='p-4'></div>

      <article>
        <div className="container">
          <div className="row my-2">
            <h5 className="my-3 mx-lg-5"><b>recent news</b></h5>
            <div className="col-12 col-md-3 mx-auto">
              <div className='news-card'>
                <img src="/h6.jpg" alt="" className="w-100"/>
                <h6 className="my-2"><b>building a solid team-interview with founder</b></h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus officiis impedit dignissimos? Cumque, harum. </p>
                <p className="m-color"><b>read more</b></p>
              </div>
            </div>
            <div className="col-12 col-md-3 mx-auto">
              <div className='news-card'>
                <img src="/h6.jpg" alt="" className="w-100"/>
                <h6 className="my-2"><b>work smart as an architect-Tips for you</b></h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus officiis impedit dignissimos? Cumque, harum. </p>
                <p className="m-color"><b>read more</b></p>
              </div>
            </div>
            <div className="col-12 col-md-3 mx-auto">
              <div className='news-card'>
                <img src="/h3.jpg" alt="" className="w-100"/>
                <h6 className="my-2"><b>utilize vacant land in an office to make it more useful.</b></h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus officiis impedit dignissimos? Cumque, harum. </p>
                <p className="m-color"><b>read more</b></p>
              </div>
            </div>
            
          </div>
        </div>
      </article>
    
      <footer>
        <div className="container">
          <div className="row py-5 px-2 align-items-center">
            <div className="col-12 col-md-4 mx-auto">
              <h2>Arnowlogi</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore ea fugit odit, nam minus.</p>
            </div>
            <div className="col-12 col-md-8 mx-auto">
              <div className="d-md-flex justify-content-around align-items-center ">
                <p className="text-white text-capitalize f-link">
                  <b>services</b>
                </p>
                <p className="text-white text-capitalize f-link">
                  <b>news & events</b>
                </p>
                <p className="text-white text-capitalize f-link">
                  <b>recent works</b>
                </p>
                <p className="text-white text-capitalize f-link">
                  <b>privacy policy</b>
                </p>
                <p className="text-white text-capitalize m-color">
                  <b>hire us</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
