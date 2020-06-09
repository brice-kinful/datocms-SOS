import React, { Component } from "react";
import axios from "axios";

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grams: [],
      handle: "",
    };
  }

  componentDidMount() {
    // const insta = this.props.data.allDatoCmsSocialProfile.edges.filter(
    //   ({ node }) => {
    //     return node.profileType === "Instagram";
    //   }
    // );
    const handle = "shareoursuzylowcountry";
    const instagramRegExp = new RegExp(
      /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
    );

    const fetchInstagramPhotos = async (accountUrl) => {
      const response = await axios.get(accountUrl);
      const json = JSON.parse(response.data.match(instagramRegExp)[1]);
      const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
        0,
        5
      );
      this.setState((prevState) => ({
        grams: [...prevState.grams, edges],
      }));
    };
    fetchInstagramPhotos(`https://www.instagram.com/${handle}/`);

    // axios
    //   .get(`https://www.instagram.com/shareoursuzylowcountry/?__a=1`)
    //   .then((res) => {
    //     const data = res.data.graphql.user.edge_owner_to_timeline_media.edges;
    //     this.setState((prevState) => ({
    //       grams: [...prevState.grams, data],
    //     }));
    //   });
  }

  render() {
    const arr = this.state.grams;
    return (
      arr.length > 0 && (
        <section className="instagram">
          <div className="wrapper xl">
            <div className="handle nobel-font uppercase center-text">
              @shareoursuzylowcountry
            </div>
            <div className="flex grid five">
              {arr.map((grams) => {
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
      )
    );
  }
}

export default Instagram;
