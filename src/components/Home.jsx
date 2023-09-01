import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { FaMediumM } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Home = () => {
    return (
        <div className="home-container">
            <div className="wrapp-align">
                <h1 className="name">Hey there !<span>I&apos;m Lengushuru Charles</span></h1>
                <h4 className="profession">Full Stack Developer</h4>
                <p className="abt">I enjoy bridging the gap between engineering and design
                    combining my technical knowledge with my keen eye for design to create a beautiful product.
                    My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect
                    user experiences. Look through some of my work and experience! If you like what you see and have a project you need coded,
                    don’t hestiate to contact me.
                </p>
                <div className="resume">
                    <a className="resume-link" href="https://drive.google.com/uc?export=download&id=1bRKqxVpGsFB2Vl2Mo3_st8jDHLyOjYv1" target="_blank">Get my resume (PDF)</a>
                </div>

                <ul className="social-media-links">
                    <li><a href="https://twitter.com/ngushuru"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/lengushuru-charles"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href="https://medium.com/@charleslengushuru_8709"><FaMediumM className="medium" /></a></li>
                    <li><a href="https://github.com/lengushuru"><TbBrandGithubFilled /></a></li>
                    <li><a href="https://wellfound.com/u/lengushuru-charles"><FontAwesomeIcon icon={faAngellist} /></a></li>
                </ul>
            </div>
            <figure className="welcome-cont">
                <img className="home-img" src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" alt="home-img" />
            </figure>
        </div>
    );
}

export default Home;