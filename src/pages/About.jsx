import profilePic from "../assets/profile-pic.jpg";

function About() {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-4 my-3 mt-lg-5">
            <img
              className="img-thumbnail "
              src={profilePic}
              alt="profile-pic"
              style={{ height: 200 + "px" }}
            />
          </div>
          <div className="col-lg-8">
            <h2>About me:</h2>
            <p>
              <span className="fw-bold fst-italic">
                Full-stack web developer bringing together form and function to
                help businesses grow{" "}
              </span>
              <br />
            </p>
            <p>
              I am a full-stack web developer with a background in music
              production, signage design and manufacturing, CNC programing and
              operation, marble and granite artisanship, wood working, and a
              list of other things. <br />
            </p>
            <p>
              What drives me the most in any endeavor is the love of bringing
              together aesthetic beauty with utility and function. Throughout my
              journey from having beautified homes with marble and granite
              countertops to creating signage for businesses by bringing
              clients' designs to life, I have always enjoyed enhancing life in
              ways that are pleasing through the marriage of form and function.
            </p>
            <p>
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
