import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...this.props}><path d="M14.9 1.8c.2-.3 0-.8-.4-.8h-11c-.4 0-.6.5-.4.8L8 8v8H6c-.5 0-1 .4-1 1h8c0-.5-.4-1-1-1h-2V8l4.9-6.2zM9 6c-.8 0-1.5-.7-1.5-1.5S8.2 3 9 3s1.5.7 1.5 1.5S9.8 6 9 6z" /></svg>;
  }

}