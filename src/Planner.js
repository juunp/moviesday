import React, { Component } from 'react';
import Moment from 'react-moment';


class Planner extends Component{

  render(){
    this.list = this.props.value.order.map((item, idx)=>
      <li key={item.id.toString()}>
        {item.title} <Moment format="HH:mm">{item.selectedTt.movieStart}</Moment> => <Moment format="HH:mm">{item.selectedTt.movieEnd}</Moment>
      </li>
    );
    if (!this.props.value.order.length){
      return null;
    }
    return (
      <div>
        <span>
          <Moment format="HH:mm">{this.props.value.start}</Moment> => <Moment format="HH:mm">{this.props.value.end}</Moment>
        </span>
          <ul>
            {this.list}
          </ul>
      </div>
    );
  }
}
export default Planner;
