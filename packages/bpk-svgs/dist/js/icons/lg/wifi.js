import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...this.props}><path d="M13.6 18.6c.3-.3.2-.7-.1-.9-.4-.3-1-.4-1.5-.4-.6 0-1.1.2-1.5.4-.3.2-.3.6-.1.9l1.2 1.2c.2.3.7.3.9 0l1.1-1.2zM12 14.2c1.4 0 2.7.5 3.7 1.4.2.2.6.2.8-.1l1.2-1.3c.2-.2.2-.6 0-.9-1.5-1.4-3.5-2.3-5.7-2.3s-4.2 1-5.7 2.4c-.3.2-.3.6 0 .8l1.2 1.3c.2.2.6.3.8.1 1-.9 2.3-1.4 3.7-1.4zm0-6.1c3 0 5.7 1.2 7.7 3.1.3.2.6.2.9 0l1.2-1.3c.2-.2.2-.6 0-.9-2.6-2.5-6-4-9.8-4S4.8 6.5 2.2 9.1c-.2.2-.2.6 0 .9l1.2 1.3c.2.3.6.2.9 0C6.3 9.2 9 8.1 12 8.1z" /></svg>;
  }

}