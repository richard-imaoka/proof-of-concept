import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import Swiper from 'swiper'

export default class ReactSwiper extends React.Component {

  static defaultProps = {
    options:             {},
    swiperIsInitialized: () => {},
  };

  static propTypes = {
    options:             React.PropTypes.object,
    swiperIsInitialized: React.PropTypes.func
  };

  componentDidMount(){
    let {options, swiperIsInitialized} = this.props;

    this.swiper = new Swiper(ReactDOM.findDOMNode(this), options)
    this.props.swiperIsInitialized(this.swiper)
  }

  shouldComponentUpdate(nextProps, nextState){
    this.swiper.update();

    if( this.isNumber(nextProps.activeIndex) ){
      this.swiper.slideTo( nextProps.activeIndex );
    }

    return true;
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  render(){
    let {options, style, swiperIsInitialized, className, children, ...other} = this.props;

    return (
      <div className={"swiper-container " + className} style={style} {...other}>
        <div className="swiper-wrapper">
          {
            React.Children.map(
              children,
              function (c) { return <div className='swiper-slide'>{c}</div> }
            )
          }
        </div>
      </div>
    )
  }
}