import profilePic from "../assets/profile-pic.jpg";

function About() {
  return (
    <div className="container">
      
      {/* <p id="about-tagline">
        Full-stack web developer bringing together form and function to help
        businesses grow
      </p> */}
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5">
            <img
              src={profilePic}
              alt="profile-pic"
              style={{ height: 200 + "px" }}
            />
          </div>
          <div className="col-8">
          <h1>Jeremy Fleming</h1>
            <p>
              <span className="fw-bold fst-italic">Full-stack web developer bringing together form and function to
              help businesses grow </span><br />
              <br />
              I am a full-stack web developer with a background in other
              industries such as music production, signage design and
              manufacturing, CNC programing and operation, marble and granite
              artisanship, wood working, and a list of other things. <br />
              <br />
              What drives me the most in any endeavor is the love of bringing
              together aesthetic beauty with utility and function. Throughout my
              journey from having beautified homes with marble and granite
              countertops to creating signage for businesses by bringing
              clients' designs to life, I have always enjoyed the marriage of
              form and function as it enhances lives in a way that is pleasing.
              <br />
              <br />
              This journey has thus brought me to developing front-end and
              back-end web solutions for businesses, organizations, and
              individuals to help them grow and connect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
