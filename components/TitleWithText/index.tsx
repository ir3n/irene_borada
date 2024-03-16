import Container from "../Container";
import LargeTitle from "../LargeTitle";

interface Props {
  title: string;
  text: string;
}

const TitleWithText = (props: Props) => {
  const { title, text } = props;

  return (
    <div className="section">
      <Container>
        <LargeTitle title={title} />
        <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>
      </Container>
    </div>
  );
};

export default TitleWithText;
