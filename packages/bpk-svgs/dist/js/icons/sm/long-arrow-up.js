import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...this.props}><path d="M10.5 15.5V9h2.2c1 0 1.6-1 1.1-1.7l-3.7-5.7C9.6.9 8.5.9 8 1.6L4.2 7.3C3.7 8 4.3 9 5.3 9h2.2v6.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5z" /></svg>;
  }

}