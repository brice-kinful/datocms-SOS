import React, { Component } from "react";
import axios from "axios";

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grams: [],
      handle: ""
    };
  }

  componentDidMount() {
    axios
      .get(`https://www.instagram.com/shareoursuzylowcountry/?__a=1`)
      .then(res => {
        const data = res.data.graphql.user.edge_owner_to_timeline_media.edges;
        this.setState(prevState => ({
          grams: [...prevState.grams, data]
        }));
      });
  }

  render() {
    const arr = this.state.grams;
    const { social } = this.props;
    return (
      <section className="instagram">
        <div className="wrapper xl">
          {/* {social.edges.filter(({ node }) => {
            switch (node.profileType) {
              case "Instagram":
                return (
                  <div key={node.id} className="nobel-font uppercase">
                    {node.slug}
                  </div>
                );
            }
          })} */}
          <div className="handle nobel-font uppercase center-text">
            @shareoursuzylowcountry
          </div>
          <div className="flex grid five">
            {arr.map(grams => {
              return grams.slice(0, 5).map(({ node }, index) => {
                // console.log(node);
                return (
                  <React.Fragment key={node.id}>
                    <a
                      href={`https://www.instagram.com/p/${node.shortcode}`}
                      target="_blank"
                      className="one-fifth grid-item"
                    >
                      <img src={node.thumbnail_src} />
                    </a>
                  </React.Fragment>
                );
              });
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Instagram;
