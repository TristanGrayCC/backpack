import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...this.props}><path d="M16.4 12c1.2 0 2 1.2 1.4 2.2l-4.5 7.2c-.6.9-2 .9-2.5 0l-4.5-7.2c-.6-1 .2-2.2 1.4-2.2H10V4c0-1.1.9-2 2-2s2 .9 2 2v8h2.4z" /></svg>;
  }

}