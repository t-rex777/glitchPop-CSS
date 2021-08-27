import React from "react";
import App from "../../Base";
function Card() {
  return (
    <App
      header="Card"
      description="You can choose variety of card components according to your purpose"
    >
      <div className="content-center mb-4">
        <div className="card mr-3">
          <img
            className="card-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCF8u9Hiht5iQ7sV2ttYqfJkmnsBseSU7bg&usqp=CAU"
            alt=""
          />
          <h1 className="card-header">This is a Card</h1>
          <p className="card-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            odit ex praesentium, repudiandae quam enim temporibus libero quidem
            nisi aperiam maxime at consectetur tenetur? Officiis nobis dolorem
            non exercitationem iusto?
          </p>
          <button className="card-btn">Read more...</button>
        </div>
        <div className="card mr-3">
          <p className="overlay-text">Hey there this is an image overlay</p>
          <img
            className="card-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCF8u9Hiht5iQ7sV2ttYqfJkmnsBseSU7bg&usqp=CAU"
            alt=""
          />
          <h1 className="card-header">This is a Card</h1>
          <p className="card-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            odit ex praesentium, repudiandae quam enim temporibus libero quidem
            nisi aperiam maxime at consectetur tenetur? Officiis nobis dolorem
            non exercitationem iusto?
          </p>
          <button className="card-btn">Read more...</button>
        </div>
        <div className="card card-shadow">
          <p className="overlay-text">Hey there this is an image overlay</p>
          <img
            className="card-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCF8u9Hiht5iQ7sV2ttYqfJkmnsBseSU7bg&usqp=CAU"
            alt=""
          />
          <h1 className="card-header">This is a Card</h1>
          <p className="card-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            odit ex praesentium, repudiandae quam enim temporibus libero quidem
            nisi aperiam maxime at consectetur tenetur? Officiis nobis dolorem
            non exercitationem iusto?
          </p>
          <button className="card-btn">Read more...</button>
        </div>
        
      </div>
      <iframe
          title="jkdsaf"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522card%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522card-image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcTuCF8u9Hiht5iQ7sV2ttYqfJkmnsBseSU7bg%2526usqp%253DCAU%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522card-header%2522%253EThis%2520is%2520a%2520Card%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%252C%2520adipisicing%2520elit.%2520Earum%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520odit%2520ex%2520praesentium%252C%2520repudiandae%2520quam%2520enim%2520temporibus%2520libero%2520quidem%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520nisi%2520aperiam%2520maxime%2520at%2520consectetur%2520tenetur%253F%2520Officiis%2520nobis%2520dolorem%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520non%2520exercitationem%2520iusto%253F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522card-btn%2522%253ERead%2520more...%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522overlay-text%2522%253EHey%2520there%2520this%2520is%2520an%2520image%2520overlay%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522card-image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcTuCF8u9Hiht5iQ7sV2ttYqfJkmnsBseSU7bg%2526usqp%253DCAU%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522card-header%2522%253EThis%2520is%2520a%2520Card%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%252C%2520adipisicing%2520elit.%2520Earum%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520odit%2520ex%2520praesentium%252C%2520repudiandae%2520quam%2520enim%2520temporibus%2520libero%2520quidem%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520nisi%2520aperiam%2520maxime%2520at%2520consectetur%2520tenetur%253F%2520Officiis%2520nobis%2520dolorem%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520non%2520exercitationem%2520iusto%253F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522card-btn%2522%253ERead%2520more...%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card%2520card-shadow%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522overlay-text%2522%253EHey%2520there%2520this%2520is%2520an%2520image%2520overlay%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522card-image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcTuCF8u9Hiht5iQ7sV2ttYqfJkmnsBseSU7bg%2526usqp%253DCAU%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522card-header%2522%253EThis%2520is%2520a%2520Card%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%252C%2520adipisicing%2520elit.%2520Earum%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520odit%2520ex%2520praesentium%252C%2520repudiandae%2520quam%2520enim%2520temporibus%2520libero%2520quidem%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520nisi%2520aperiam%2520maxime%2520at%2520consectetur%2520tenetur%253F%2520Officiis%2520nobis%2520dolorem%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520non%2520exercitationem%2520iusto%253F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522card-btn%2522%253ERead%2520more...%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A"
          style={{
            width: "100%",
            height: "1310px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
    </App>
  );
}

export default Card;
