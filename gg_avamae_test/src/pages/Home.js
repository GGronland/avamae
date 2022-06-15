import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./Home.css";
import OfficeImage from "../images/OfficeImage.jpg";
import SimpleSwiper from "../components/swiper/SimpleSwiper.js";
import Button from "../components/general/Button.js";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBanners, setLoadedBanners] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetch(
        "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setLoadedBanners(data.Details);
          // console.log({loadedBanners}); // Personal sanity check that we're receiving the expected JSON body from the GET request
        });
    } catch (error) {
      setError(error.message); // Handles general errors
    }
  }, []); // useEffect avoids infinite loop - we change states when making the request, which would cause the function + GET request to run again (would API spam)

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className="home-main">
      <div className="home-section1">
        <SimpleSwiper content={loadedBanners} />
        {error && <p>{error}</p>}
      </div>

      <div className="home-section2">
        <div className="home-section2-column1">
          <h2>Curabitur rutrum, ligula ac porta bibendum, enim. </h2>
          <p>
            Pellentesque non nisl in ante pretium porta non non nisi. Sed eu
            tellus vel velit tincidunt mattis. Curabitur placerat dui a diam
            sollicitudin laoreet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam finibus commodo orci, sit amet aliquet
            eros.{" "}
          </p>

          <ul>
            <li>
              Etiam a quam neque. Nunc varius sapien sed est tempor, at varius
              eros posuere. Nam at gravida.{" "}
            </li>
            <li>
              Sed ut mauris dignissim, scelerisque eros vitae, vestibulum.{" "}
            </li>
            <li>
              Ut ornare finibus elementum. Fusce vel enim eu massa congue
              maximus nec nec urna. Donec.{" "}
            </li>
            <li>
              Vestibulum at odio sit amet sapien ullamcorper commodo. Praesent
              tincidunt tempor.{" "}
            </li>
          </ul>

          
          <Link to='/about-us'>
            <Button className="home-button-learn">Learn more</Button>
          </Link>
          
        </div>

        <div className="home-section2-column2">
          <img className="home-section2-image1" src={OfficeImage} alt="" />
        </div>
      </div>

      <div className="home-section3">
        <div className="home-section3-box">
          <h2>Donec lectus leo, congue in nisi ut, semper venenatis orci. </h2>
          <p>
            Etiam varius erat dolor, non aliquam turpis pretium id. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Sed non nisi aliquam, vehicula turpis quis,
            condimentum est. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. In vel ex orci.
          </p>
          <Button className="home-button-login">
            Log in
          </Button>
        </div>
      </div>

      <div className="home-section4">
        <div className="home-section4-top">
          <h2>Morbi rutrum est sed ipsum suscipit, non tempor.</h2>
          <h3>Donec euismod tempor dui. Cras enim. </h3>
        </div>

        <div className="home-section4-middle">
          <p>
            Cras cursus lacus id dapibus faucibus. Fusce eleifend mollis enim
            vel pretium. In hac habitasse platea dictumst. Quisque ut magna
            facilisis, mollis ante feugiat, dapibus sapien. Sed at tincidunt
            massa. Vivamus est odio, volutpat vitae justo et, molestie tincidunt
            sem. Mauris id mi porttitor, vestibulum dui non, efficitur libero.
            Sed eu blandit lorem, vel consectetur arcu. Vivamus dignissim
            efficitur mattis. Donec eget sodales felis. Maecenas ac semper
            lectus. Nunc mollis massa ut enim malesuada bibendum. Aliquam nec
            dui sit amet dolor gravida accumsan.
          </p>
          <p>
            Cras scelerisque dapibus porttitor. Vestibulum pharetra aliquam
            ante. Aliquam erat volutpat. Nullam at nunc massa. Nam sed neque
            purus. Duis fringilla ut orci id congue. Proin posuere enim sed
            efficitur venenatis. In maximus, nibh nec congue fringilla, tortor
            elit tempor lectus, non interdum mauris ex nec libero. Donec egestas
            purus vel tortor congue volutpat. Phasellus pellentesque odio nec
            sapien convallis, at fringilla diam mattis.
          </p>
          <p>
            Sed dolor justo, semper nec orci in, congue congue eros. Proin
            bibendum, arcu ut pretium pharetra, mauris enim finibus lectus, at
            consequat mauris felis nec nisi. Suspendisse eget tempus enim.
            Vivamus tristique egestas lectus, et bibendum eros. Mauris eleifend
            elementum velit, et finibus est viverra in. Nulla facilisi. Nunc ex
            tortor, eleifend vel lectus sit amet, auctor luctus justo. Vivamus
            tincidunt lorem in vestibulum egestas. In tincidunt in nisi eu
            mollis. Nullam ullamcorper sollicitudin lectus, eu aliquet mauris
            tempor vitae. Suspendisse in ultricies leo.
          </p>
          <p>
            Aliquam rutrum mi ac sem imperdiet, in ullamcorper lorem aliquet.
            Vivamus malesuada nibh id justo gravida suscipit. Vestibulum et
            dictum tortor. Phasellus mollis congue nulla, et cursus libero
            consequat nec. Aenean elementum dapibus odio ut varius. Nullam
            convallis odio non libero congue varius. Ut sit amet leo
            condimentum, hendrerit ipsum iaculis, vulputate metus. Phasellus id
            urna vel nunc efficitur vulputate in ac sapien. Vestibulum placerat
            gravida ipsum in auctor. Fusce quis dignissim turpis. Vivamus
            sollicitudin risus et congue lobortis.
          </p>
        </div>

        <div className="home-section4-bottom">        
          <Link to='/contact-us'>
            <Button className="home-button-contact">Contact us</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
