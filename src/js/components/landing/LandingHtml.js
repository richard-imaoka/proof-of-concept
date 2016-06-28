import React   from 'react'
import LandingPage from './LandingPage'

export default class LandingHtml extends React.Component {
  render() {
    const cssFiles = this.props.landing.get("css");
    const jsFiles  = this.props.landing.get("js");

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4.0.0-alpha.2/dist/css/bootstrap.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          { cssFiles.map( url => <link key={url} rel="stylesheet" href={url} /> ) }
          <title>Title</title>
        </head>
        <body>
          <LandingPage store={this.props.store} landing={this.props.landing} />
        </body>
        { jsFiles.map( url => <script key={url} src={url} ></script>) }
        <script>injectCanvasAll();</script>
      </html>
    );
  }
}