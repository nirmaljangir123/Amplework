import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { AiOutlineGateway } from "react-icons/ai";
// import { GrIteration, GrStorage, GrTestDesktop } from "react-icons/gr";
import "../../component/Boxset/box.css";
import "../../views/welcomepage/welcomepage.css";
import Button from "react-bootstrap/Button";

const CardsComponent = (props) => {
  const { data, text, smalltext } = props;
  //   console.warn("-------->propsdata",props.data);
  return (
    // <Card className='bg-info'>
    //     <Card.Body>
    //         <Card.Img variant="top" src={propsdata.pic} alt='no pic'/>
    //         <Card.Title>{propsdata.smalltext}</Card.Title>
    //         <Card.Text>
    //             {
    //                 propsdata.text
    //             }
    //         </Card.Text>
    //     </Card.Body>

    // </Card>

    <Card className="cardscolor">
      <Card.Body>
        <p className="cardslogoset ">{props.data}</p>
        <Card.Title>{props.text}</Card.Title>
        <Card.Text>
          <p>{props.smalltext}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardsComponent;

export const AppcardsGroup = (propsvalue) => {
  console.warn("========>props icon", propsvalue.text);
  return (
    <>
      <Card className="text-center justify-content-between m-3 rounded py-3 border border-2 iconshadow">
        <Card.Body className="">
          <p className="iconsize">{propsvalue.icon}</p>
          <Card.Title className="icontitletext fs-5 ">
            {propsvalue.text}
          </Card.Title>
          <Card.Text>{propsvalue.smalltext}</Card.Text>
          <Card.Text>{propsvalue.link}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export const NumberSpeak = (props) => {
  const { bluetext, text } = props;
  return (
    <Card>
      <Card.Body className="numberbody py-4 rounded">
        <Card.Title className="numbertitle"> <h2>{props.bluetext}</h2> </Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

{
  /* <CardGroup >
<Card className='cardscolor'>
    <Card.Body>
        <h1><GrIteration /></h1>
        <Card.Title>Application Re-engineering</Card.Title>
        <Card.Text>
            Our developers evaluate existing applications through a series of in-house testing processes in order to evaluate the functionalities of the applications that need to be re-engineered
        </Card.Text>
    </Card.Body>

</Card>
<Card className='cardscolor'>
    <Card.Body>
        <h1><GrStorage /></h1>
        <Card.Title>Last updated 3 mins ago</Card.Title>
        <Card.Text>
            Our engineers are profound in supporting you for moving applications from physical or local settings to remote based servers. We also provide application migration as well as integration services.
        </Card.Text>
    </Card.Body>

</Card>
<Card>
    <Card.Body className='cardscolor'>
        <h1><GrTestDesktop /></h1>
        <Card.Title>Application Support</Card.Title>
        <Card.Text>
            It includes a range of activities for ensuring proper functioning and optimization of a web or mobile application. We focus towards continuous monitoring and continuous improvement of functions.
        </Card.Text>
    </Card.Body>

</Card>
</CardGroup> */
}
