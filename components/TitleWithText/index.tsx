import Container from "../Container";

const TitleWithText = ({ title, text }) => {
  return (
    <div className="section">
      <Container>
        <h2 className={`large-title accent-color `}>{title}</h2>
        <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>
      </Container>
    </div>
  );
};

export default TitleWithText;
