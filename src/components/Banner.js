import Card from 'react-bootstrap/Card';
import banner from '../banner.png';


function Banner() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={banner} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>instacart</Card.Title>
        <Card.Text>
          Order groceries for delivery or pickup today
        </Card.Text>
        <Card.Text>Whatever you want from local stores, brought right to your door.</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Banner;