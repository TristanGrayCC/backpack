import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...this.props}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm7.9 9h-4c-.1-2.6-.6-4.9-1.4-6.6 2.9 1 5 3.5 5.4 6.6zM12 20c-.6-.5-1.8-2.9-2-7h4c-.2 4.1-1.4 6.5-2 7zm-2-9c.2-4.1 1.4-6.5 2-7 .6.5 1.8 2.9 2 7h-4zm-.6-6.6C8.6 6.1 8.1 8.4 8 11H4c.5-3.1 2.6-5.6 5.4-6.6zM4.1 13h4c.1 2.6.6 4.9 1.4 6.6-2.9-1-5-3.5-5.4-6.6zm10.5 6.6c.8-1.6 1.3-3.9 1.4-6.6h4c-.5 3.1-2.6 5.6-5.4 6.6z" /></svg>;
  }

}