import './About.sass';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <div className="about__title-block">
          <h2 className="about__title">ABOUT</h2>
          <a
            className="about__link"
            href="https://drive.google.com/file/d/1TNEEODdToNKlyBFkGcO3_RxbV19-NY3L/view?usp=share_link"
            target="_blank"
          >
            CV
          </a>
          <a
            className="about__link"
            href="https://github.com/gazievri"
            target="_blank"
          >
            Github
          </a>
        </div>

        <p className="about__paragraph">
          As a frontend developer, I believe that a combination of technical
          skills, creativity, and attention to detail is essential for
          delivering the best possible user experience. I pride myself on
          possessing these qualities, and I strive to improve them continuously
          to provide my clients with the highest level of service.
        </p>
        <p className="about__paragraph">
          One of my greatest strengths is my proficiency in HTML, CSS, and
          JavaScript. I have an in-depth understanding of these languages, which
          enables me to create visually appealing and responsive websites that
          function flawlessly across all platforms and devices. I am also
          well-versed in modern front-end frameworks such as React, which allows
          me to build scalable and maintainable applications.
        </p>
        <p className="about__paragraph">
          Another quality that sets me apart is my ability to collaborate
          effectively with clients and team members. I understand that clear
          communication and teamwork are crucial for delivering a successful
          project, and I make sure to keep everyone on the same page throughout
          the development process. I also take pride in my ability to listen to
          feedback and adapt my work accordingly to meet the client's needs.
        </p>
        <p className="about__paragraph">
          Finally, I believe that attention to detail is critical in frontend
          development. I pay close attention to typography, layout, and color
          schemes to create designs that are not only visually appealing but
          also easy to use and navigate. I always ensure that every aspect of
          the design is pixel-perfect and works as intended, so the final
          product is of the highest quality.
        </p>
        <p className="about__paragraph">
          Overall, I am confident in my abilities as a frontend developer, and I
          believe that my technical skills, creativity, attention to detail, and
          collaboration skills make me a valuable asset to any project.
        </p>
      </div>
    </section>
  );
};
