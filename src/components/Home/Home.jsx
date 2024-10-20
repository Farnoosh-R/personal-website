import React from "react";
import "./style.scss";
import Button from "../Button/Button";


const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="main-title">
              <b className="me-3">Hi!</b>
              <b>I'm Farnoosh</b>
            </div>
            <div className="main-title">
              <b>Greate to see you</b>
            </div>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla animi quae aperiam magni exercitationem necessitatibus corrupti sed ratione inventore doloremque eos eaque perferendis atque voluptates assumenda, laborum ut quas!</p>
            <Button title={'Download Resume'} />
          </div>
          <div className="col-md-6">
          <div className="theme-box-primary"></div>
          <img src="images/f.png" alt="" />
          <div className="theme-box-secondary">
          <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos at natus. Voluptates, ipsa non eligendi quod id ullam necessitatibus odit repellendus hic numquam impedit nam quaerat consequuntur inventore a.</p>
          </div>
          <img  className="img-dot" src="images/dot-s.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
