import Container from "../Container";
import { GradientTitle } from "../GradientTitle";
import SlideFromBelow from "../SlideFromBelow";

interface Props {
  title: string;
  text: string;
}

const TitleWithText = ({ title, text }: Props) => {
  return (
    <div className="section">
      <Container>
        <SlideFromBelow>
          <GradientTitle>{title}</GradientTitle>
        </SlideFromBelow>
        <div
          className="text mt-2 lg:mt-6"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </Container>
    </div>
  );
};

export default TitleWithText;
