import { DivContainer, Img } from "./styledComponents";
import img from "../../assets/imgs/me.jpg";

const About = () => {
  return (
    <DivContainer>
      <h1>
        Hello!!!!, Welcome to my Rick and Morty app project!, I hope you like
        it! I'm Alejandro Perez, nice to meet you!, this is my first project and
        I hope you enjoy it!
      </h1>
      <h1>
        So far this is how I have my project going on, I'm planning to enhance
        it way more! but this is the initial approach. Hope to see you back here
        soon! Thank you :D
      </h1>
      <Img src={img} alt="name"></Img>
    </DivContainer>
  );
};

export default About;
