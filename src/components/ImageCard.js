import React from 'react';


class ImageCard extends React.Component{  

    constructor(props){
      super(props);

      this.imageRef = React.createRef(); // Create Ref
      this.state = {spans: 0}
    }

componentDidMount(){
  this.imageRef.current.addEventListener('load', this.setSpans); 
  console.log("Ref: ", this.imageRef.current);
}

setSpans = () =>{
  const height= this.imageRef.current.clientHeight;
  const spans = Math.ceil(height / 10);
  this.setState({spans});
}

  render(){
    const {description, urls} = this.props.image;   //Destruction

    return(
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img  ref={this.imageRef}
              alt={description} 
              src={urls.regular}/>
      </div>
    );
  };

}


export default ImageCard;