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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <p className="about__paragraph">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?{' '}
        </p>
        <p className="about__paragraph">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
      </div>
    </section>
  );
};
