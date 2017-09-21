import React, { Component } from "react";
import Parallax from "react-springy-parallax";

import PageOne from "../Pages/PageOne/index";
import PageTwo from "../Pages/PageTwo/index";
import styles from "./styles";

const getImages = img => `url('assets/${img}')`;

const imgs = [
  getImages("realshots.jpg"),
  getImages("init.jpg"),
  getImages("add.jpg"),
  getImages("complete.jpg"),
  getImages("future.jpg")
];

class App extends Component {
  render() {
    return (
      <main className="h-100">
        <Parallax ref="parallax" pages={5}>
          <Parallax.Layer offset={0} speed={1} className="bg-gold" />
          <Parallax.Layer
            offset={1}
            speed={1}
            style={{ backgroundImage: `${imgs[0]}`, ...styles.imgStyles }}
          />
          <Parallax.Layer
            offset={2}
            speed={1}
            style={{ backgroundImage: `${imgs[1]}`, ...styles.imgStyles }}
          />
          <Parallax.Layer
            offset={3}
            speed={1}
            style={{ backgroundImage: `${imgs[2]}`, ...styles.imgStyles }}
          />
          <Parallax.Layer
            offset={4}
            speed={1}
            style={{ backgroundImage: `${imgs[3]}`, ...styles.imgStyles }}
          />
          <Parallax.Layer
            offset={5}
            speed={1}
            style={{ backgroundImage: `${imgs[4]}`, ...styles.imgStyles }}
          />

          <Parallax.Layer
            offset={0}
            speed={0.5}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
            <PageOne />
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={-0.1}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(2)}
            className="flex justify-center items-center"
          >
            <PageTwo title="First Impressions" />
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(3)}
          >
            <PageTwo title="Add Plans" />
          </Parallax.Layer>

          <Parallax.Layer
            offset={3}
            speed={-0.1}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(4)}
            className="flex justify-center items-center"
          >
            <PageTwo title="Check Plans" />
          </Parallax.Layer>

          <Parallax.Layer
            offset={4}
            speed={0.5}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(0)}
          >
            <PageTwo title="Add Future Plans" btn="true" />
          </Parallax.Layer>
        </Parallax>
      </main>
    );
  }
}

export default App;
