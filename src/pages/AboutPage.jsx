import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="About">
        <h1>about this Feedback app</h1>
        <p>This is a React app to leave a feedback for a product or service</p>
        <p>version V1.0.0</p>
        <p>
          <a href="/">Back to home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
