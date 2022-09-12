import React from "react";
import ico from './icon.jpg';
import bg2 from './bg2.jpg';
import bg from './bg.jpg';
import sr from './sample.mp4';
import im1 from './im1.jpg';
import im2 from './im2.jpg';
import im3 from './im3.jpg';
import im4 from './im4.jpg';
import im5 from './im5.jpg';
import im6 from './im6.jpg';
import im7 from './im7.jpg';
import im8 from './im8.jpg';
import im9 from './im9.jpg';
import './App.css';

function Home(){
    return(
    <div class="home">
             <table class="head"  width="100%" height="100px" background={bg2}>
            <tr >
                <td width="10%"><img src={ico} width="100%" height="70px"></img></td>
                <td width="48%" ><h1 class="nam">Art Studio</h1></td>
                <td class="na" width="10%"><a href="#" class="navb">HOME</a></td>
                <td class="na" width="12%"><a href="#" class="navb">PORTFOLIO</a></td>
                <td class="na" width="10%"><a href="#" class="navb">OUR TEAM</a></td>
            </tr>
        </table>
        <table  width="100%">
            <tr>
                <td>
                    <h1 class="wel">Welcome to Rabinky Art Studio</h1>
                </td>
            </tr>
        </table>
        <table  width="100%" cellspacing="0px">
            <tr>
                <td><center><video src={sr} width="70%" height="440" controls autoPlay>
                </video></center>
            </td>
            </tr>
        </table>
        <table  width="90%">
            <tr>
                <td>
                    <p>Hi, my name is Maria Rabinky. I’m an artist and illustrator. My company Rabinky Art, LLC provide custom illustration,
                map illustrations, architectural illustrations and logo design for my client’s annual reports, illustrative map
                projects, published articles, marketing brochures and other projects using my artwork.<br></br><br></br>
                
                My clients include colleges, hospitals, corporations, magazines, real-estate developers; in other words, all type of
                large and small businesses. To view the history of my work, please visit all of my websites: <a href="https://illustratedmaps.com/" target="_blank" class="ext">IllustratedMaps.com</a>,
                <a href="https://rabinkyart.com/"  target="_blank" class="ext">RabinkyArt.com</a>  and <a href="https://illustrativeartwork.com/"  target="_blank" class="ext">IllustrativeArtwork.com.</a></p>
            </td>
            </tr>
        </table>
        <table  width="100%">
            <tr>
                <td width="50%" class="con" ><p>I am passionate about my art work especially creating bird’s-eye-view map illustrations for my clients and for my own
                artwork portfolio, which is available for licensing and is used by licensors worldwide.
                
                Most of my watercolor paintings enhance private and corporate collections. Whether it is Fine Art painting, Illustrated
                Map or black and white Graphic drawing they complement any type of interior, marketing campaign or event.
                
                My professional title is owner and principal artist at Rabinky Art, LLC, which specializes in Illustrated Maps and Urban
                Landscapes (“cityscapes”), which is a perfect match with my architectural and artistic background. I received my
                master’s degree in fine art and architecture from Academy of Fine Arts in Saint Petersburg, Russia. I am currently a
                member of the Graphic Artists Guild based in New York, NY and the Illustrators Club based in Washington, DC.
            </p>
            </td>
            <td> <img src={im1} width="100%" height="450px"></img></td>
            </tr>
        </table>
        <table  width="100%">
          <tr>
          <td> <img src={im2} width="95%" height="350px" class="im"></img></td>
          <td> <img src={im3} width="95%" height="350px" class="im"></img></td>
          <td> <img src={im4} width="95%" height="350px" class="im"></img></td>
          <td> <img src={im5} width="95%" height="350px" class="im"></img></td>
          </tr>
          <tr>
          <td> <img src={im6} width="95%" height="350px" class="im"></img></td>
          <td> <img src={im7} width="95%" height="350px" class="im"></img></td>
          <td> <img src={im8} width="95%" height="350px" class="im"></img></td>
          <td> <img src={im9} width="95%" height="350px" class="im"></img></td>
          </tr>

        </table>
        <table class="foot">
            <tr>
              <td>Somanna A.S &copy 2022</td>
            </tr>
          </table>
    </div>
    )
}

export default Home;