import React from 'react';
import { FaBook } from 'react-icons/fa';
//import { VscFolderLibrary } from 'react-icons/vsc';//
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaBook className="about__icon" />
              <h5>Education</h5>
              <center>
              <table>
                <tr>
                  <td> 2017 </td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>SSC</td>
                  <td>&emsp;</td>
                  <td>GSEB</td>
                </tr>

                <tr>
                  <td> 2020 </td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>DIPLOMA (C.E )</td>
                  <td> &emsp;</td>
                  <td> GTU </td>
                </tr>
                <tr>
                  <td> 2022 </td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>&emsp;</td>
                  <td>B.E. (C.E )  running </td>
                  <td> &emsp;</td>
                  <td> GTU </td>
                </tr>
              </table>
              </center>
            </article>
            
          </div>
          <p>I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScript, building everything from landing pages to APIs. </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro