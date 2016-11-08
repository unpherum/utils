var React = require('react');

export default class DjangoCSRFComponent extends React.Component {


  render() {

    var csrftoken = $.cookie('csrftoken');
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}/>
    );

  }
};
