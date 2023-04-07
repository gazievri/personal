import './Section.sass';

export const Section = (props) => {
  const { id, title, } = props.options;
  return (
    <section className="section" id={id}>
      <div className="section__content">
        <h2 className="section__title">{title}</h2>
        {
            props.children
        }
      </div>
    </section>
  );
};
