import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...this.props}><path d="M15.5 6H12V5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1H2.5C1.675 6 1 6.675 1 7.5v6c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-6c0-.825-.675-1.5-1.5-1.5zM8 5h2v1H8V5zm3.891 7.297a.372.372 0 0 1 0 .526l-.526.526a.372.372 0 0 1-.526 0L9 11.511l-1.838 1.838a.372.372 0 0 1-.526 0l-.526-.526a.372.372 0 0 1 0-.526l1.838-1.838L6.109 8.62a.372.372 0 0 1 0-.526l.526-.526a.372.372 0 0 1 .526 0L9 9.406l1.838-1.838a.372.372 0 0 1 .526 0l.526.526a.372.372 0 0 1 0 .526l-1.837 1.838 1.838 1.839z" /></svg>;
  }

}