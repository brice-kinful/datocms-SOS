import React, { Component } from "react";
import axios from "axios";

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grams: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.instagram.com/soslowcountry/?__a=1`).then(res => {
      const data = res.data.graphql.user.edge_owner_to_timeline_media.edges;
      //   console.log(data);
      this.setState(prevState => ({
        grams: [...prevState.grams, data]
      }));
    });
  }

  render() {
    const grams = this.state.grams;
    // console.log(grams[0]);
    return (
      <section className="instagram">
        <div className="wrapper flex grid five">
          {grams.map((gram, index) => {
            console.log(gram.node);
            return (
              <div className="one-fifth" key={index}>
                <img src={gram.thumbnail_src} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Instagram;
