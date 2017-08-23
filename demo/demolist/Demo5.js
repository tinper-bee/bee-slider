/**
*
* @title rangeSlider
* @description 数组变化的slider
*
*/
class CustomizedRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 20,
      upperBound: 40,
      value: [20, 40],
    };
  }

  onLowerBoundChange = (e) => {
    let upperBound = this.state.upperBound;
    let value = parseInt(e.target.value);
    if(parseInt(e.target.value) >upperBound){
      value = this.state.upperBound
    }else if(parseInt(e.target.value)>100){
      value = 100;
    }else if(e.target.value<0){
      value = 0;
    }
    this.setState({ lowerBound: value });
    this.handleApply();

  }

  onUpperBoundChange = (e) => {
    let lowerBound = this.state.lowerBound;
    let value = parseInt(e.target.value);
    if(parseInt(e.target.value) < lowerBound){
      value = this.state.lowerBound
    }else if(parseInt(e.target.value)>100){
      value = 100;
    }else if(e.target.value<0){
      value = 0;
    }
    
    this.setState({ upperBound: value });
    this.handleApply();
  }
  
  onSliderChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  }
  
  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  }
  
  render() {
    return (
      <div>
        <label>LowerBound: </label>
        <input type="number" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />
        <br />
        <label>UpperBound: </label>
        <input type="number" value={this.state.upperBound} onChange={this.onUpperBoundChange} />
        {/*<br />
        <button onClick={this.handleApply}>Apply</button>*/}
        <br /><br />
        <Slider.Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
      </div>
    );
  }
}

// https://github.com/react-component/slider/issues/226
class PureRenderRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: false,
    };
  }
  handleChange = (value) => {
    console.log(value);
    this.setState({
      foo: !this.state.foo,
    });
  }
  render() {
    return (
      <Slider.Range defaultValue={[20, 40, 60, 80]} onChange={this.handleChange} allowCross={false} />
    );
  }
}

class Demo5 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		let style={width:600,marginLeft:50}
		return (
			<div>
			<div style={style}>
			<p>Basic Range，`allowCross=false step默认是1 defaultValue=[0, 20]`</p>
			<Slider.Range allowCross={false} defaultValue={[0, 20]} onChange={this.log} />
			</div>
			<div style={style}>
			<p>Basic Range，`allowCross=true step默认是1 defaultValue=[10, 40]`</p>
			<Slider.Range defaultValue={[10, 40]} onChange={this.log} />
			</div>
			<div style={style}>
			<p>Basic Range，`disabled defaultValue=[0, 20]`</p>
			<Slider.Range allowCross={false} defaultValue={[0, 20]} onChange={this.log} disabled />
			</div>
			<div style={style}>
			<p>Basic Range，`step=20 defaultValue=[20, 80]` </p>
			<Slider.Range step={20} defaultValue={[20, 80]} onBeforeChange={this.log} />
			</div>
			<div style={style}>
			<p>Basic Range，`step=20, dots defaultValue=[20, 40]` </p>
			<Slider.Range dots step={20} defaultValue={[20, 40]} onAfterChange={this.log} />
			</div>
			<div style={style}>
			<p>Customized Range</p>
			<CustomizedRange />
			</div>
			<div style={style}>
			<p>Range as child component</p>
			<PureRenderRange />
			</div>
			</div>
		)
	}
}