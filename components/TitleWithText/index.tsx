const TitleWithText = ({ title, text }) => {
  return (
    <div className="section">
      <h2 className={`large-title accent-color `}>{title}</h2>
      <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
};

export default TitleWithText;
