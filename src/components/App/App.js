import React, { Component } from "react";
import Parallax from "react-springy-parallax";
import NotificationSystem from "react-notification-system";

import PageOne from "../Pages/PageOne/index";
import PageTwo from "../Pages/PageTwo/index";

import styles from "./styles";
import imgs from "./imgs";

class App extends Component {
  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    this._notificationSystem.addNotification({
      message: "You can use this application offline too 😍",
      level: "warning",
      autoDismiss: 10,
      position: "br"
    });
  }

  render() {
    return (
      <main className="h-100">
        <Parallax ref="parallax" pages={6}>
          <Parallax.Layer offset={0} speed={1} className="bg-gold" />
          <Parallax.Layer
            offset={1}
            speed={1}
            style={{
              backgroundImage: `url('${imgs[0]}')`,
              ...styles.imgStyles
            }}
          />
          <Parallax.Layer
            offset={2}
            speed={1}
            style={{
              backgroundImage: `url('${imgs[1]}')`,
              ...styles.imgStyles
            }}
          />
          <Parallax.Layer
            offset={3}
            speed={1}
            style={{
              backgroundImage: `url('${imgs[2]}')`,
              ...styles.imgStyles
            }}
          />
          <Parallax.Layer
            offset={4}
            speed={1}
            style={{
              backgroundImage: `url('${imgs[3]}')`,
              ...styles.imgStyles
            }}
          />
          <Parallax.Layer
            offset={5}
            speed={1}
            style={{
              backgroundImage: `url('${imgs[4]}')`,
              ...styles.imgStyles
            }}
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
          >
            <PageTwo />
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(3)}
          >
            <PageTwo />
          </Parallax.Layer>

          <Parallax.Layer
            offset={3}
            speed={-0.1}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(4)}
          >
            <PageTwo />
          </Parallax.Layer>

          <Parallax.Layer
            offset={4}
            speed={0.5}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(5)}
          >
            <PageTwo />
          </Parallax.Layer>

          <Parallax.Layer
            offset={5}
            speed={-0.1}
            style={styles.parallax}
            onClick={() => this.refs.parallax.scrollTo(0)}
          >
            <PageTwo btn={true} />
          </Parallax.Layer>
        </Parallax>
        <NotificationSystem ref="notificationSystem" />
      </main>
    );
  }
}

export default App;
