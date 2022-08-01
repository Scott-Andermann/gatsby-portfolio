import * as React from 'react';
import './Code.css';
import engineer from '../../images/engineer.png';
import develop from '../../images/develop.png';
import product from '../../images/product.png';


const Code = () => {
    return (
        <div className='top-code'>
            <div className='code container'>
                <div className='column first'>
                    <div className='icon-container'>
                        <img className='skill-icon' alt='Develop icon' src={develop} />
                    </div>
                    <h3>Develop</h3>
                    <p>I like to bring ideas to life</p>
                    <h4>Languages I speak:</h4>
                    <ul className='skills'>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='column'>
                    <div className='icon-container'>
                        <img className='skill-icon' alt='Engineer icon' src={engineer} />
                    </div>
                    <h3>Engineer</h3>
                    <p>Experienced in new product development</p>
                    <h4>Tools I have used:</h4>
                    <ul className='skills'>
                        <li>Skill here</li>
                        <li>Statistical Analysis</li>
                        <li>Skill here</li>
                        <li>Various CAD systems</li>
                        <li>MS Excel</li>
                    </ul>
                </div>
                <div className='column last'>
                    <div className='icon-container'>
                        <img className='skill-icon' alt='Product icon' src={product} />
                    </div>
                    <h3>Product</h3>
                    <p>Adept at gaining understanding from users</p>
                    <h4>Skills I have gained:</h4>
                    <ul className='skills'>
                        <li>Customer relations</li>
                        <li>Building buisness cases</li>
                        <li>Market analysis</li>
                        <li>Quality control</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Code;