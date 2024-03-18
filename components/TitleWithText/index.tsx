import Container from "../Container";
import LargeTitle from "../LargeTitle";

interface Props {
  title: string;
  text: string;
}

const TitleWithText = ({ data }: { data: Props }) => {
  return (
    <div className="section">
      <Container>
        <LargeTitle title={data?.title} />
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: data?.text }}
        ></div>
      </Container>
    </div>
  );
};

export default TitleWithText;
