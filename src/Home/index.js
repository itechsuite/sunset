import React from 'react'
import { Container } from 'react-bootstrap'
import CarouselItem from '../components/CarouselItem'
import RecentProperties from '../components/RecentProperties'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../res/images/dummy-logo.png'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <section className="space-between ">
                <CarouselItem />
            </section>
            <div className="container-fluid">

                <section className="\">
                    <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200" >
                        <div class="card glass lg:card-full text-neutral-content ">
                            <figure class="p-6">
                                <img src={logo} class="rounded-lg "/>
                            </figure>
                            <div class="max-w-md card-body">
                                <h2 class="card-title">Sunset</h2>
                                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                                <div class="card-actions">
                                    <Link  to="about " class="btn glass rounded-full"> Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    {/* <RecentProperties /> */}
                </section>
                <section className="section-properties">
                    <div>
                        <h1> list of finest properties</h1>

                    </div>
                </section>

                <section className="section-products">
                    <div>
                        <h1> Our housing products</h1>

                    </div>
                </section>

                <section className="section-products">
                    <div>
                        <h2 className="display-3"> Join us today</h2>


                    </div>
                </section>

                <section>
                    <h1> lets call you</h1>
                </section>

            </div>

        </div>
    )
}
