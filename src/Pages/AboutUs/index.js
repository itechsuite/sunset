import React from 'react'
import {} from '../../'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import AboutUsComponent from '../../components/AboutUsComponent'

function AboutUs() {
    return (
        <div>
            <Container >
                <div className="container-fluid">
                    <h4 className="text-center"> Suncity  </h4>
                </div>
                <div className="row">
                    <AboutUsComponent title="our mission" description="we are daily driven to keep our promise. increase our land bank, expand our client base
                            offering excellent services and affordable housing products with a singular mission to 
                            exceed expectations"/>

                    <AboutUsComponent icon="fa fa home" title="our vision" description="we are daily driven to keep our promise. increase our land bank, expand our client base
                            offering excellent services and affordable housing products with a singular mission to 
                            exceed expectations"/>  

                    <AboutUsComponent title="our watch word" description="we are daily driven to keep our promise. increase our land bank, expand our client base
                            offering excellent services and affordable housing products with a singular mission to 
                            exceed expectations"/>          
                    
                </div>

               
                
            </Container>
            <section className="section-why-choose-us">
                    <div className="justify-content">
                         <h3 className="heading-color p-3"> Why choose us </h3>
                    </div>
                    <p className="text-white mx-5 p-2"> Our basic role at suncity is to secure stable, affordable housing for eveyone, 
                        irrespective of their income level, social class, and all else. We are daily driven to 
                        keep our promise, increase our land bank, expand our client base, and offering excellent services and affordable housing products
                        with the singular mission to exceed expectations. Our series range are repeated development concepts built on suitable production
                        sites. They are standardized in terms and design, layout and specification offering great value and a familiar product. 
                        Our goal is to make the incredible affordable. 
                    </p>
            </section>
            <section>
                <div className="">
                    <p> Our directors </p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs


