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
                Full-stack web developer merging form and function to
                drive business growth
              </span>
              <br />
            </p>
            <p>
              I am a full-stack web developer with a diverse background in
              signage design and manufacturing, CNC programming and operation,
              marble and granite craftsmanship, music production, and
              woodworking. <br />
            </p>
            <p>
              What drives me is the fusion of aesthetic elegance with practical
              functionality. From enhancing homes with luxurious marble
              countertops to creating impactful business signage, I've
              consistently enjoyed turning visions into reality through a
              thoughtful blend of form and function.
            </p>
            <p>
              This passion for creating meaningful, functional designs has
              naturally led me to web development. Now, I craft comprehensive
              front-end and back-end solutions, dedicated to helping businesses,
              organizations, and individuals grow and connect by translating
              their needs into innovative and effective web experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
