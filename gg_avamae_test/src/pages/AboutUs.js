import "./AboutUs.css";
import OfficeImage from "../images/OfficeImage.jpg";

function AboutUsPage() {
  return (
    <div className="main-about">
      <h2 className="header">About us</h2>

      <p className="para">
        Duis maximus, lacus vitae vulputate tempor, dolor purus rhoncus eros,
        vulputate sodales dui mi hendrerit risus. Proin id ligula quis urna
        auctor scelerisque. Pellentesque eget accumsan sem. In mattis sed augue
        vel condimentum. Morbi feugiat scelerisque erat ut pharetra. Suspendisse
        interdum finibus porttitor. Curabitur sit amet ex pharetra, tempor arcu
        in, imperdiet ipsum. Aenean dictum sapien non erat hendrerit lacinia.
      </p>

      <p className="para">
        Integer erat lectus, pharetra at congue sit amet, tempus non nisl.
        Nullam faucibus pulvinar massa quis tempor. Quisque quis lectus sed
        ipsum porta tristique. Phasellus vitae neque lacus. Integer a sapien
        ultricies, iaculis sapien et, efficitur diam. Sed ut ante quis velit
        pellentesque venenatis. Vivamus euismod massa sit amet congue dignissim.
        Donec efficitur felis ac cursus consectetur. Donec feugiat pretium
        iaculis.
      </p>

      <div className="main-about-image-container">
        <img className="about-image1" src={OfficeImage} alt="" />
      </div>

      <p className="para">
        Aenean sed ex in elit viverra condimentum. Maecenas lobortis lacinia
        bibendum. Suspendisse potenti. Vivamus semper venenatis tristique. Sed
        quis nunc erat. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Proin interdum vehicula felis,
        id bibendum risus venenatis eget. Nulla facilisi. Etiam rhoncus
        elementum tristique. Vestibulum id ligula eu leo aliquet consectetur.
        Etiam ullamcorper non urna eu fermentum. Maecenas dui lectus,
        ullamcorper ut ultricies sit amet, porttitor nec ante.
      </p>

      <h3>Quisque dui ex, tincidunt eget nunc:</h3>
      <ul>
        <li>Mauris et gravida ante. Donec at ante placerat, tincidunt ante.</li>
        <li>Donec in eleifend quam. Vestibulum nunc. </li>
        <li>
          Aenean quis tellus sit amet purus malesuada mollis eget id metus.
          Vivamus a vulputate urna.
        </li>
        <li>
          Nam quam dui, tincidunt vitae erat eu, ornare molestie urna. Nullam
          vel leo.
        </li>
      </ul>

      <p>
        Nulla facilisi. Integer commodo justo et eros convallis viverra. Aliquam
        ac sapien sit amet enim aliquet ornare ac non risus. Donec malesuada
        rhoncus commodo. Mauris purus mauris, dapibus at risus.
      </p>

      <p>
        Sed commodo, enim sodales consequat tincidunt, magna mauris bibendum
        orci, ac finibus velit elit vitae risus. Mauris in interdum dolor.
        Vivamus tincidunt sagittis posuere. In vel purus et nibh vestibulum
        pellentesque quis nec metus. Integer laoreet vulputate dictum. Aliquam
        ultrices ex nulla, ac commodo augue bibendum eu. Pellentesque
        scelerisque, turpis id imperdiet euismod, mi ex aliquet turpis, at
        congue leo ante sit amet nisl. Aenean consequat auctor metus, ac
        tristique nunc laoreet nec.
      </p>
      
    </div>
  );
}

export default AboutUsPage;
