var React = require('react');
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ListingComponent;
var ImageCollection = require('../models/images.js').ImageCollection;
var Image = require('../models/images.js').Image;


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImageCollection();
    var imageModel = new Image();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });

    return {
      collection: imageBoard,
      showForm: false,
    };
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
  },
  handleToggerForm: function(e){
    e.preventDefault();
    this.setState({showForm: !this.state.showForm});
  },
  editImage: function(image){
    this.setState({imageToEdit: image});
  },
  render: function(){
    var self = this;
    var imageList = this.state.collection.map(function(image){
      return <ListingComponent key={image.cid} model={image} editImage={self.editImage}></ListingComponent>
    });

    return(
      <div className="container">
        <header className="container-fluid main-header">
          <a href="#" className="add-image" onClick={this.handleToggerForm}><i className="glyphicon glyphicon-plus"></i></a>
        </header>
        {this.state.showForm ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage}></FormComponent> : null}
        {imageList}
      </div>
    );
  }
});

module.exports = {
  AppComponent: AppComponent
};
