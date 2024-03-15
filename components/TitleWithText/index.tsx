import Container from "../Container";

interface Props {
  title: string;
  text?: string;
}

const TitleWithText = (props: Props) => {
  const { title, text } = props;

  return (
    <div className="section">
      <Container>
        <h2 className={`large-title accent-color`}>{title}</h2>
        {text && (
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        )}
      </Container>
    </div>
  );
};

export default TitleWithText;
