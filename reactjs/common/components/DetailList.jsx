import React from 'react';
import DetailCell from './DetailCell';

export default class DetailList extends React.Component {

  constructor(){
      super();

  }
  _getInitialState()
  {

  }

  render() {
    var listClass="detail-list col-xs-12";
    listClass+=this.props.striped?" striped":"";
    var selectable = this.props.selectable;
      var details = [];
      for (let i = 0;i<this.props.items.length;i++){
          var item = this.props.items[i];
          details.push(<DetailCell id={item.id} callback={this.props.callback} key={i} title={item.title} detail={item.description} selectable={selectable}/>);
      }
    return (
        <div className="detail-list striped">
            {details.map(function(item,i){
                return (
                    item
                )
            })}
        </div>
     );
  }
};