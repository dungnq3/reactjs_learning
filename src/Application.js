import React, {Component} from 'react';

class Application extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      overTen: false
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});
  }
  // componentWillMount(props, state){

  // }

  // componentDidMount(props, state){
  //   console.log("Mounted with", props, state);
  // }

  // componentWillReceiveProps(props){

  // }

  // componentWillUpdate(props, state){
  //   if(this.props.name !== props.name){

  //   }
  // }

  componentDidUpdate(props, state){
    if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen){
      this.setState({overTen: true});
    }
  }

  // render view
  render(){
    let name = 'Vincent';
    return(
      <div>
        <h1>Hello, {name} {this.state.count} times</h1>
        {(this.state.overTen) ? <h3>Click too many bro</h3> : null}
        <span>
          <button onClick={() => this.handleClick()}>Click Me!</button>
        </span>
      </div>
    ); 
  }
}

export default Application;