import React from "react";
import CoffeeTable from '../ImageAssets/pexels-viktoria-alipatova-2074130.jpg'

export default function AboutUsSection() {
    return(
        <div className="AboutUsSectionDiv">
            <div className="Image">
                <h1>" You need your coffee <br /> as your companion.</h1>
            </div>
            <div className="Main">
                <div className="Column">
                    <div className="About">
                        <img src={CoffeeTable} alt="Coffee Table"></img>
                        <div className='Logo'>
                            <h2>BARAKO</h2>
                            <h3>Café</h3>
                        </div>
                        <p> BarakoCafé is a website designed for a coffee shop opening for e-commerce. 
                            Made with React JS. Made for honing coding and designing skills for front-end 
                            web development.
                        </p>
                        <p> Obviously, it doesn't aesthetically appeal like an actual website, maybe because
                            of the choice of fonts, colors and components, it may also lack interactivity. 
                            I aim to improve the UI/UX design for this. Criticisms are appreciated.
                        </p>
                    </div>
                    <div className="References">
                        <h3>References:</h3>
                        <ul>
                            <li>Images used are royalty free images from <a href="https://www.pexels.com/" target="_blank" rel='noreferrer'>https://www.pexels.com/</a> and <a href="https://pixabay.com/" target="_blank" rel='noreferrer'>https://pixabay.com/</a></li>
                            <li>Social media icons and other icons are from <a href="https://fontawesome.com/" target="_blank" rel='noreferrer'>https://fontawesome.com/</a></li>
                            <li>Fonts used, Anton and DM Sans from <a href="https://fonts.google.com/" target="_blank" rel='noreferrer'>https://fonts.google.com/</a></li>
                            <li>Website solely made with React JS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}