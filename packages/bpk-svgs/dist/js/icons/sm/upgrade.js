import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...this.props}><path d="M17 9c0-4.5-3.7-8.1-8.2-8-4.1.1-7.6 3.5-7.8 7.6-.2 3.6 2 6.6 5 7.9 1 .3 2-.5 2-1.5v-4H6.3c-.9 0-1.5-1-1.1-1.8L8 4.6c.5-.8 1.6-.8 2.1 0l2.8 4.7c.4.7-.1 1.7-1.1 1.7H10v4c0 1.1 1.1 1.8 2.1 1.4C15 15.1 17 12.3 17 9z" /></svg>;
  }

}