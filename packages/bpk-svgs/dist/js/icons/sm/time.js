import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...this.props}><path d="M10 4.1V3h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5s.2.5.5.5H8v1.1C5.2 4.6 3 7 3 10c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3-2.2-5.4-5-5.9zm1.5 8.4c-.2.2-.5.3-.7.3s-.5-.1-.7-.3L8.6 11c-.4-.4-.6-.9-.6-1.4V7c0-.6.4-1 1-1s1 .4 1 1v2.6l1.5 1.5c.4.4.4 1 0 1.4z" /></svg>;
  }

}