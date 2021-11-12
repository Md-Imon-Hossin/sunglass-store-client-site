import React from 'react';
import './Eyeglass.css'
import glass1 from '../../../img/stylishman-1.jpg'
import glass2 from '../../../img/stylishman-2.jpg'
const Eyeglass = () => {
    return (
        <div className='mb-3'>
            <section>
            <h2 className='mb-5'>Eyeglass</h2>
            <div className="container">
                <div className="row eyeglass-flex">
                <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                   <img className='img-fluid' src={glass1} alt="" />
                </div>

                    <div className="col-xl-6 col-lg-6 col-md-12" style={{textAlign :'left'}}>
                        <p>WE MAKE IT EASY TO YOU
                        </p>
                        <h2 className='mb-3'>Find Quality Eyeglasses & Sunglasses Online
                            </h2>
                            <p>Glasses or eyeglasses are used to help a person see better. They are usually made of a metal or plastic frame and two lenses that improve vision. Goggles are used to protect the eyes from dust, debris, water, or other things that can harm the eyes. ... Sunglasses are used to shade the eyes from sunlight.</p>
                    </div>
                </div>
            </div>
            </section>
        <section className='py-4'>
            <div className="container">
                <div className="row eyeglassTwo-flex">
                    <div className="col-xl-6 col-lg-6 col-md-12">
        <p>FRAMES FOR EVERY BUDGET
        </p>
        <h2 className='mb-3'>The One Stop Shop For All Your Eyewear Needs
        </h2>
        <p> Glasses correct vision by allowing your eyes to focus light on the correct spot of your retina. The curved frames bend light, and with the right prescription, these frames manipulate the light to reach the correct spot on your retina.</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
        <img src={glass2} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Eyeglass;