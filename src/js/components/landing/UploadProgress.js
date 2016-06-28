import React  from 'react'
import {Line} from 'rc-progress'

export default class UplaodProgress extends React.Component {

  render() {
    const uploads = this.props.data.toList().map( x => x );

    if(this.props.data.size > 0)
      return (
        <div className="popup popup-large">
          {uploads.map(this.renderProgressBar)}
        </div>
      );
    else
      return <div />;
  }

  renderProgressBar(progressData){
    return (
      <div key={progressData.get("fileName")} className="child">
        <h6>{"Uploading " + progressData.get("fileName")} {progressData.get("progress")}&#37;</h6>
        <Line percent={progressData.get("progress")} strokeWidth="1.5"/>
      </div>
    )
  }
}