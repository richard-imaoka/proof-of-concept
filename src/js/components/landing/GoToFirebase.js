import React  from 'react'
import {clearURL} from  '../../actions/gotoFirebaseActions'

export default class GoToFirebase extends React.Component {
  render() {
    if(this.props.data.get("url") !== undefined)
      return (
        <div className="popup popup-small">
          <i className="fa fa-times" ariaHidden="true" onClick={this.onClick.bind(this)}></i>
          <h5 className="text-center child">Upload Finished!</h5>
          <h4 className="text-center child"><a href={this.props.data.get("url")} target="_blank">Open the page</a></h4>
        </div>
      );
    else
      return <div />;
  }

  onClick(){
    this.props.store.dispatch(clearURL());
  }
}