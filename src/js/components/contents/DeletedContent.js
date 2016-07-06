import React   from 'react'

export default class DeletedContent extends React.Component {
  render() {
    return <div ref="self" style={{height: "0px"}}/>
  }
}