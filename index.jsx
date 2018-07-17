class App extends React.Component {
  showLeft() {
    this.refs.left.show();
  }

  showRight() {
    this.refs.right.show();
  }

  render() {
    return (
    <div>
      <button onClick={this.showLeft.bind(this)}>Show Left Menu!</button>
      <button onClick={this.showRight.bind(this)}>Show Right Menu!</button>

      <Menu ref="left" alignment="left">
        <MenuItem hash="first-page">First Page</MenuItem>
        <MenuItem hash="second-page">Second Page</MenuItem>
        <MenuItem hash="third-page">Third Page</MenuItem>
      </Menu>

      <Menu ref="right" alignment="right">
        <MenuItem hash="first-page">II First Page</MenuItem>
        <MenuItem hash="second-page">II Second Page</MenuItem>
        <MenuItem hash="third-page">II Third Page</MenuItem>
      </Menu>
    </div>
    );
  }
}

class Menu extends React.Component {
  state = {
    visible: false,	
  }

  show() {
    console.log('show...');
    this.setState({ visible: true });
    document.addEventListener("click", this.show.bind(this));
  }
  
  hide() {
    console.log('hide...');
    this.setState({ visible: false });
    document.removeEventListener("click", this.hide.bind(this));
  }
  
  render() {
    console.log('state: ', this.state);
    // console.log('props Menu: ',this.props);
    return (
    <div className="menu">
      <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
    </div>
    );
  }
}

class MenuItem extends React.Component {
  navigate(hash) {
    window.location.hash = hash;
  }

  render() {
    // console.log('navigate:' ,this.navigate);
    // console.log('props MenuItem:' ,this.props);
    return <div className="menu-item" onClick={this.navigate.bind(this, this.props.hash)}>{this.props.children}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
