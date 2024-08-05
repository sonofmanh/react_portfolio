
import { useState } from 'react'
import './Hero.css'
import { IoHome, IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import Nav from './nav/Nav'
// react-scroll for smooth scroll to i
const Hero = () => {
	const [checkbox, setCheckbox] = useState(true)
	return (
		<div id='hero'>
			{checkbox && <Nav />}

			<section className='right' style={{ width: '100vw' }} >
				<div className="burger">
					<label htmlFor="checkbox">{checkbox ? <ImCancelCircle /> : <IoMenu />}</label>
					<input type="checkbox" name="" id="checkbox" value={checkbox} onClick={() => { setCheckbox(!checkbox) }} />
				</div>
				<h1>i am <br /> a designer & developer</h1>
				<p>100% html,scss/sass,css,js,react,python,django & djangoRESTFULL stark </p>
				<a href="#resume">view portfolio <IoHome /></a>
			</section>
		</div >
	)
}

export default Hero