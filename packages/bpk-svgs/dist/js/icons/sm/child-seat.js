import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...this.props}><path d="M13.4 16H5.3C4 16 3 15 3 13.7v-.3c0-.2.2-.4.4-.4h12.1c.2 0 .4.2.4.4.1 1.4-1.1 2.6-2.5 2.6zM2.1 3l.7 7.3c.1 1 .9 1.7 1.8 1.7h7c.7 0 1.1-.6.9-1.3l-.4-1.1c0-.3-.4-.6-.8-.6H6.7c-.4 0-.8-.3-.9-.7L4.2 2.7c-.1-.4-.5-.7-.9-.7h-.2c-.6 0-1.1.5-1 1z" /></svg>;
  }

}