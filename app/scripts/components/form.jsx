var React = require('react');

var FormComponent = React.createClass({
  getInitialState: function(){
    return {
      url: '',
      caption: ''
    };
  },
  handleUrlChange: function(e){
    var urlInputValue = e.target.value;

    this.setState({url: urlInputValue});
    console.log(this.state);
  },
  handleCaptionChange: function(e){
    var captionInputValue = e.target.value;

    this.setState({caption: captionInputValue});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var newImage = {url: this.state.url, caption: this.state.caption};

    this.props.addImage(newImage);
    // this.props.collection.create(newImage);
    this.setState({url: '', caption: ''});
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit} className="well" action="index.html">
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input onChange={this.handleUrlChange} type="text" className="form-control" id="url" placeholder="Image URL" value={this.state.url}/>
        </div>
        <div className="form-group">
          <label htmlFor="caption">Image Caption</label>
          <input onChange={this.handleCaptionChange} value={this.state.caption} type="text" className="form-control" id="caption" placeholder="Image Caption" />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    );
  }
});

module.exports = {
  FormComponent: FormComponent
};
