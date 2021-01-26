// import React from "react";

// const Pokemon = (props) => {
//   return (
//     <div>
//       <i className={`far fa-heart main--heart {clic}`}></i>
//       <div className="main--img">
//         <img src={props.img} alt={props.name} />
//       </div>
//       <h3 className="main--tite main--up">{props.name}</h3>
//       <ul className="main--types">
//         {props.types.map((type, index) => (
//           <li className="main--type main--up" key={index}>
//             {type}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Pokemon;

import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: false,
    };
    this.handlerFavorite = this.handlerFavorite.bind(this);
  }

  handlerFavorite(ev) {
    this.setState({
      heart: !this.state.heart,
    });
    // this.props.handlerFavorite(this.props.id);
    this.props.handlerFavorite(ev.currentTarget.id);
  }
  render() {
    const clasFav = this.state.heart ? "heart" : "";
    return (
      <div onClick={this.handlerFavorite} id={this.props.id} className="main--page">
        <i className={`${clasFav} far fa-heart main--heart`}></i>
        <div className="main--img">
          <img src={this.props.img} alt={this.props.name} />
        </div>
        <h3 className="main--tite main--up">{this.props.name}</h3>
        <ul className="main--types">
          {this.props.types.map((type, index) => (
            <li className="main--type main--up" key={index}>
              {type}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Pokemon;
