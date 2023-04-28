import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { AiOutlineGateway } from "react-icons/ai";
// import { GrIteration, GrStorage, GrTestDesktop } from "react-icons/gr";
import "../../component/Boxset/box.css";
import { useState } from "react";

const CardsComponent = (props) => {
  const { data, text, smalltext } = props;
  // console.warn("-------->propsdata", props);

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
        <div className="py-3">
          <img src={props.data} alt="no pic" />
        </div>
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
  const [state, setState] = useState({
    onHover: false,
  });
  const { onHover } = state;
  const handlehover = () => {
    setState({ ...state, onHover: true });
  };
  const handlehoverOut = () => {
    setState({ ...state, onHover: false });
  };
  console.warn("========>props icon", propsvalue);
  return (
    <>
        <Card
          className={` rounded py-3 border border-2 ${
            onHover ? "cardtextchange" : ""
          } `}
          onMouseOut={handlehoverOut}
          onMouseOver={handlehover}
        >
          <Card.Body className="text-center ">
            <div className=" imageheight">
              <img
                src={propsvalue.icon}
                alt=""
                className="blockimage mx-auto"
              />
            </div>
            <Card.Title className="icontitletext pt-4">
              {propsvalue.text}
            </Card.Title>
            <Card.Text className="blocktext">{propsvalue.smalltext}</Card.Text>
            <Card.Text>{propsvalue.link}</Card.Text>
          </Card.Body>
        </Card>
    </>
  );
};

















export const AppcardsGroup1 = (propsvalue) => {
  return (
    <>
      <Card className="">
        <Card.Body className="">
          <p className="">{propsvalue.icon}</p>
          <Card.Title className="">{propsvalue.text}</Card.Title>
          <Card.Text className="">{propsvalue.smalltext}</Card.Text>
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
        <Card.Title className="numbertitle">
          {" "}
          <h2>{props.bluetext}</h2>{" "}
        </Card.Title>
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
