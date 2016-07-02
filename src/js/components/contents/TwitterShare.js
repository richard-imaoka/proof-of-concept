import React    from 'react'
import ReactDOM from 'react-dom'

export default class Social extends React.Component {
  render() {
    return (
      <div className="twitter-background">
        <a ref="link" href="to be replaced by setTwitterShareHref() in js/twitter-share.js" className="twitter-share-link" style={{textDecoration: "none"}}>
        <div className="twitter-content">
          <i className="twitter-icon fa fa-twitter fa-3x" ariaHidden="true"></i>
          <div className="twitter-text">Share</div>
        </div>
        </a>
      </div>
    );
  }

  componentDidMount(){
    //defined in js/twitter-share.js
    setTwitterShareHref(ReactDOM.findDOMNode(this.refs.link));
  }
}