import * as React from 'react';
import { motion } from 'framer-motion';
import './Code.css';
import engineer from '../../images/engineer.png';
import develop from '../../images/develop.png';
import product from '../../images/product.png';


const Code = () => {
    return (
        <div className='code-container'>
            <div className='code'>
                <div className='column first'>
                    <div className='icon-container'>
                        <img className='skill-icon' alt='Develop icon' src={develop} />
                    </div>
                    <h3>Developer</h3>
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
                        <li>MS Excel</li>
                        <li>Statistical analysis</li>
                        <li>Flowcharts</li>
                        <li>FMEA</li>
                        <li>Various CAD systems</li>
                    </ul>
                </div>
                <div className='column last'>
                    <div className='icon-container'>
                        <img className='skill-icon' alt='Product icon' src={product} />
                    </div>
                    <h3>Product Manager</h3>
                    <p>Adept at gaining understanding from users</p>
                    <h4>Skills I have gained:</h4>
                    <ul className='skills'>
                        <li>Customer relations</li>
                        <li>Building buisness cases</li>
                        <li>Market analysis</li>
                        <li>Project management</li>
                        <li>Quality control</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Code;