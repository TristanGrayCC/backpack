import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...this.props}><path d="M7.5 1c-.3 0-.5.2-.5.5V6c0 .2-.2.4-.5.4S6.1 6.2 6 6V1.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V6c0 .2-.2.4-.5.4S4.1 6.2 4 6V1.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .5.4.9.9.9H4v7.5c0 .8.7 1.5 1.5 1.5S7 16.3 7 15.5V8h.1c.5 0 .9-.4.9-.9V1.5c0-.3-.2-.5-.5-.5zm6.2 0C11.2 1 10 5.7 10 8v1c0 .6.4 1 1 1h1v5.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V2.1c0-.6-.6-1.1-1.3-1.1z" /></svg>;
  }

}