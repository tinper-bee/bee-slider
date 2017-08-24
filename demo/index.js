
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
*
* @title 标准slider
* @description 基础的slider
*
*/

const style = { width: 600, margin: 50 ,marginBottom:60};
class Demo1 extends Component {
	
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		return (
			<div>
				<div style={style}>
				  <p>Basic Slider，`step默认1`</p>
				  <Slider defaultValue={20} onAfterChange={this.log}/>
				</div>
				<div style={style}>
				  <p>Basic Slider，step=20</p>
				  <Slider step={20} defaultValue={40} onAfterChange={this.log} />
				</div>
				<div style={style}>
				  <p>Basic Slider, disabled</p>
				   <Slider disabled defaultValue={60} />
				</div>
				<div style={style}>
				  <p>Controlled Slider，不可改变</p>
				  <Slider value={40} />
				</div>
			</div>
		)
	}
}/**
*
* @title 带有dots的slider(dots间距同step)
* @description 基础的slider
*
*/

class Demo2 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		const style = {width:600,marginLeft:50,marginBottom:60}
		return (
			<div>
				<div style={style}>
					<p>Basic Slider，`step=20, dots `</p>
					<Slider dots step={20} defaultValue={60} onAfterChange={this.log} />
				</div>
				<div style={style}>
					<p>Basic Slider，`step=10, dots, dotStyle={"{borderColor: 'orange'}"}, activeDotStyle={"{borderColor: 'yellow'}"}`</p>
					<Slider dots step={10} defaultValue={100} onAfterChange={this.log} dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }} />
				</div>
			</div>
		)
	}
}/**
*
* @title 自定义slider
* @description 自定义slider样式（track,handle,rail等样式自定义）
*
*/

class Demo3 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		let style={width:600,marginLeft:50,marginBottom:60}
		return (
			<div style={style}>
				<p>Slider with custom handle and track style.</p>
				<Slider
				defaultValue={30}
				trackStyle={{ backgroundColor: 'blue', height: 10 }}
				handleStyle={{
				borderColor: 'blue',
				height: 28,
				width: 28,
				marginLeft: -14,
				marginTop: -9,
				backgroundColor: 'pink',
				}}
				railStyle={{ backgroundColor: 'red', height: 10 }}
				/>
			</div>
		)
	}
}/**
*
* @title 带有marks的slider
* @description 带有marks标签的step
*
*/
class Demo4 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		let style={width:600,marginLeft:50,marginBottom:60};
		const marks = {
			'-10': '-10°C',
			0: <strong>0°C</strong>,
			26: '26°C',
			47: '47°C',
			100: {
				style: {
				color: 'red',
				},
				label: <strong>100°C</strong>
			}
		};

		const marksOther = {
			0: <strong>0°C</strong>,
			33: '33°C',
			87: '87°C',
			100: {
				style: {
				color: 'red',
				},
				label: <strong>100°C</strong>
			}
		};
		
		return (
				<div>
					<div style={style}>
						<p>（1）Slider with marks,`steps默认是1`</p>
						<Slider min={-10} marks={marks} defaultValue={33} onChange={this.log}  />
					</div>
					<div style={style}>
						<p>（2）Slider with marks and `steps=20`</p>
						<Slider min={0} marks={marksOther} step={20} defaultValue={58} onChange={this.log} />
					</div>
					<div style={style}>
						<p>（3）Slider with marks and `dots steps=20`</p>
						<Slider dots min={0} marks={marksOther} step={20} defaultValue={58} onChange={this.log} />
					</div>
					<div style={style}>
						<p>（4）Slider with marks, `step=null`，因此step = marks</p>
						<Slider min={0} marks={marksOther} step={null} defaultValue={68} onChange={this.log}  />
					</div>
					<div style={style}>
						<p>（5）Slider with marks, `included=false`</p>
						<Slider min={0} marks={marksOther} included={false} defaultValue={20} />
					</div>
					<div style={style}>
						<p>（6）Slider with marks and `steps=10,included=false`</p>
						<Slider min={-10} marks={marks} step={10} included={false} defaultValue={20} />
					</div>
					<div style={style}>
						<p>（7）Range with marks</p>
						<Slider.Range min={-10} marks={marks} onChange={this.log} defaultValue={[20, 40]} />
					</div>
					<div style={style}>
						<p>（8）Range with marks and steps</p>
						<Slider.Range min={-10} marks={marks} step={10} onChange={this.log} defaultValue={[20, 40]} />
					</div>
				</div>
		)
	}
}/**
*
* @title rangeSlider
* @description 数组变化的slider
*
*/

class PureRenderRange extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleChange = (value) => {
    console.log(value);
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
		let style={width:600,marginLeft:50,marginBottom:60}
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
					<p>Range as child component</p>
					<PureRenderRange />
				</div>
			</div>
		)
	}
}/**
*
* @title 竖直方向的slider
* @description 竖直vertical
*
*/

class Demo6 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
	  const style={float: 'left',height: 400, marginBottom: 160, marginLeft: 50,width:200}
	  const parentStyle = { overflow: 'hidden' };
		const marks = {
			0: <strong>0°C</strong>,
			26: '26°C',
			47: '47°C',
			100: {
				style: {
				color: 'red',
				},
				label: <strong>100°C</strong>
			}
		};

		return (
			<div style={parentStyle}>
				<div style={style}>
					<p>Slider with `marks, step=null`</p>
					<Slider vertical min={0} marks={marks} step={null} onChange={this.log} defaultValue={20} />
				</div>
				<div style={style}>
					<p>Slider with `marks and steps=10`</p>
					<Slider vertical dots min={0} marks={marks} step={50} onChange={this.log} defaultValue={20} />
				</div>
				<div style={style}>
					<p>Slider with `marks and steps默认是1 included=false`</p>
					<Slider vertical min={0} marks={marks} included={false} defaultValue={20} />
				</div>
				<div style={style}>
					<p>Range with `marks steps默认是1,`</p>
					<Slider.Range vertical min={0} marks={marks} onChange={this.log} defaultValue={[20, 40]} />
				</div>
				<div style={style}>
					<p>Range with `marks and steps=10`</p>
					<Slider.Range vertical min={0} marks={marks} step={10}onChange={this.log} defaultValue={[20, 40]}/>
				</div>
			</div>
		)
	}
}/**
*
* @title 带输入框的slider
* @description 和 数字输入框 组件保持同步。
*
*/

class CustomizedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:45
    };
  }
  onInputChange = (e) =>{
    //console.log(e.target.value)
    let value = parseInt(e.target.value);
    if(value >= 100){
      value = 100;
    }else if(value <= 0 || e.target.value == ''){
      value = 0;
    }
    this.changeValue(value)
  }

  onSliderChange = (value) => {
    //console.log(value);
    this.changeValue(value)
  }
  
  changeValue = (value) =>{
    this.setState({
      value:value
    })
  }
  render() {
    return (
      <div>
        <input type="number" value={this.state.value} onChange={this.onInputChange} />
        <br /><br />
        <Slider value={this.state.value} onChange={this.onSliderChange} />
      </div>
    );
  }
}

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

    if(value > upperBound){
      value = upperBound
    }else if(value <0 || value == ''){
      value = 0;
    }

    this.setValue(value,upperBound);
  }

  onUpperBoundChange = (e) => {
    let lowerBound = this.state.lowerBound;
    let value = parseInt(e.target.value);

    if(value < lowerBound){
      value = lowerBound
    }else if( value > 100 ){
      value = 100;
    }
    this.setValue(lowerBound,value);
  }
  
  onSliderChange = (value) => {
    let upperBound = value[1];
    let lowerBound = value[0];
    this.setValue(lowerBound,upperBound);
  }
  
  setValue = (lowerBound,upperBound) =>{
    this.setState({
      lowerBound:lowerBound,
      upperBound:upperBound,
      value:[lowerBound, upperBound] 
    })
  }
  
  render() {
    return (
      <div>
        <label>LowerBound: </label>
        <input type="number" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />
        <br />
        <label>UpperBound: </label>
        <input type="number" value={this.state.upperBound} onChange={this.onUpperBoundChange} />
        <br /><br />
        <Slider.Range value={this.state.value} onChange={this.onSliderChange} />
      </div>
    );
  }
}

class Demo7 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		let style={width:600,marginLeft:50,marginBottom:60}
		return (
			<div>
        <div style={style}>
          <p>Customized Range</p>
          <CustomizedSlider />
        </div>
				<div style={style}>
  				<p>Customized Range</p>
  				<CustomizedRange />
				</div>
			</div>
		)
	}
}/**
*
* @title 带tip的slider
* @description 和 tip展示 组件保持同步。
*
*/
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const RangeTootip = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class Demo8 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Slider.Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}>
        <Slider.Handle value={value} {...restProps} />
      </Slider.Tooltip>
    )
  }

	render () {
		const wrapperStyle = { width: 400, margin: 50 };
		return (
      <div>
        <div style={wrapperStyle}>
          <p>Slider with custom handle</p>
          <Slider min={0} max={20} defaultValue={3} handle={this.handle} />
        </div>
        <div style={wrapperStyle}>
          <p>Range with custom handle</p>
          <RangeTootip min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
        </div>
      </div>
		)
	}
}var DemoArray = [{"example":<Demo1 />,"title":" 标准slider","code":"/**\n*\n* @title 标准slider\n* @description 基础的slider\n*\n*/\n\nconst style = { width: 600, margin: 50 ,marginBottom:60};\nclass Demo1 extends Component {\n\t\n\tlog = (value) =>{\n\tconsole.log(value); //eslint-disable-line\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<div style={style}>\n\t\t\t\t  <p>Basic Slider，`step默认1`</p>\n\t\t\t\t  <Slider defaultValue={20} onAfterChange={this.log}/>\n\t\t\t\t</div>\n\t\t\t\t<div style={style}>\n\t\t\t\t  <p>Basic Slider，step=20</p>\n\t\t\t\t  <Slider step={20} defaultValue={40} onAfterChange={this.log} />\n\t\t\t\t</div>\n\t\t\t\t<div style={style}>\n\t\t\t\t  <p>Basic Slider, disabled</p>\n\t\t\t\t   <Slider disabled defaultValue={60} />\n\t\t\t\t</div>\n\t\t\t\t<div style={style}>\n\t\t\t\t  <p>Controlled Slider，不可改变</p>\n\t\t\t\t  <Slider value={40} />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" 基础的slider"},{"example":<Demo2 />,"title":" 带有dots的slider(dots间","code":"/**\r\n*\r\n* @title 带有dots的slider(dots间距同step)\r\n* @description 基础的slider\r\n*\r\n*/\r\n\r\nclass Demo2 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tconst style = {width:600,marginLeft:50,marginBottom:60}\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Basic Slider，`step=20, dots `</p>\r\n\t\t\t\t\t<Slider dots step={20} defaultValue={60} onAfterChange={this.log} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Basic Slider，`step=10, dots, dotStyle={\"{borderColor: 'orange'}\"}, activeDotStyle={\"{borderColor: 'yellow'}\"}`</p>\r\n\t\t\t\t\t<Slider dots step={10} defaultValue={100} onAfterChange={this.log} dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }} />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" 基础的slider"},{"example":<Demo3 />,"title":" 自定义slider","code":"/**\r\n*\r\n* @title 自定义slider\r\n* @description 自定义slider样式（track,handle,rail等样式自定义）\r\n*\r\n*/\r\n\r\nclass Demo3 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet style={width:600,marginLeft:50,marginBottom:60}\r\n\t\treturn (\r\n\t\t\t<div style={style}>\r\n\t\t\t\t<p>Slider with custom handle and track style.</p>\r\n\t\t\t\t<Slider\r\n\t\t\t\tdefaultValue={30}\r\n\t\t\t\ttrackStyle={{ backgroundColor: 'blue', height: 10 }}\r\n\t\t\t\thandleStyle={{\r\n\t\t\t\tborderColor: 'blue',\r\n\t\t\t\theight: 28,\r\n\t\t\t\twidth: 28,\r\n\t\t\t\tmarginLeft: -14,\r\n\t\t\t\tmarginTop: -9,\r\n\t\t\t\tbackgroundColor: 'pink',\r\n\t\t\t\t}}\r\n\t\t\t\trailStyle={{ backgroundColor: 'red', height: 10 }}\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" 自定义slider样式（track,handle,rail等样式自定义）"},{"example":<Demo4 />,"title":" 带有marks的slider","code":"/**\r\n*\r\n* @title 带有marks的slider\r\n* @description 带有marks标签的step\r\n*\r\n*/\r\nclass Demo4 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet style={width:600,marginLeft:50,marginBottom:60};\r\n\t\tconst marks = {\r\n\t\t\t'-10': '-10°C',\r\n\t\t\t0: <strong>0°C</strong>,\r\n\t\t\t26: '26°C',\r\n\t\t\t47: '47°C',\r\n\t\t\t100: {\r\n\t\t\t\tstyle: {\r\n\t\t\t\tcolor: 'red',\r\n\t\t\t\t},\r\n\t\t\t\tlabel: <strong>100°C</strong>\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tconst marksOther = {\r\n\t\t\t0: <strong>0°C</strong>,\r\n\t\t\t33: '33°C',\r\n\t\t\t87: '87°C',\r\n\t\t\t100: {\r\n\t\t\t\tstyle: {\r\n\t\t\t\tcolor: 'red',\r\n\t\t\t\t},\r\n\t\t\t\tlabel: <strong>100°C</strong>\r\n\t\t\t}\r\n\t\t};\r\n\t\t\r\n\t\treturn (\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>（1）Slider with marks,`steps默认是1`</p>\r\n\t\t\t\t\t\t<Slider min={-10} marks={marks} defaultValue={33} onChange={this.log}  />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>（2）Slider with marks and `steps=20`</p>\r\n\t\t\t\t\t\t<Slider min={0} marks={marksOther} step={20} defaultValue={58} onChange={this.log} />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>（3）Slider with marks and `dots steps=20`</p>\r\n\t\t\t\t\t\t<Slider dots min={0} marks={marksOther} step={20} defaultValue={58} onChange={this.log} />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>（4）Slider with marks, `step=null`，因此step = marks</p>\r\n\t\t\t\t\t\t<Slider min={0} marks={marksOther} step={null} defaultValue={68} onChange={this.log}  />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>（5）Slider with marks, `included=false`</p>\r\n\t\t\t\t\t\t<Slider min={0} marks={marksOther} included={false} defaultValue={20} />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>（6）Slider with marks and `steps=10,included=false`</p>\r\n\t\t\t\t\t\t<Slider min={-10} marks={marks} step={10} included={false} defaultValue={20} />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>（7）Range with marks</p>\r\n\t\t\t\t\t\t<Slider.Range min={-10} marks={marks} onChange={this.log} defaultValue={[20, 40]} />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>（8）Range with marks and steps</p>\r\n\t\t\t\t\t\t<Slider.Range min={-10} marks={marks} step={10} onChange={this.log} defaultValue={[20, 40]} />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" 带有marks标签的step"},{"example":<Demo5 />,"title":" rangeSlider","code":"/**\r\n*\r\n* @title rangeSlider\r\n* @description 数组变化的slider\r\n*\r\n*/\r\n\r\nclass PureRenderRange extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n  }\r\n  \r\n  handleChange = (value) => {\r\n    console.log(value);\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <Slider.Range defaultValue={[20, 40, 60, 80]} onChange={this.handleChange} allowCross={false} />\r\n    );\r\n  }\r\n}\r\n\r\nclass Demo5 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet style={width:600,marginLeft:50,marginBottom:60}\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Basic Range，`allowCross=false step默认是1 defaultValue=[0, 20]`</p>\r\n\t\t\t\t\t<Slider.Range allowCross={false} defaultValue={[0, 20]} onChange={this.log} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Basic Range，`allowCross=true step默认是1 defaultValue=[10, 40]`</p>\r\n\t\t\t\t\t<Slider.Range defaultValue={[10, 40]} onChange={this.log} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Basic Range，`disabled defaultValue=[0, 20]`</p>\r\n\t\t\t\t\t<Slider.Range allowCross={false} defaultValue={[0, 20]} onChange={this.log} disabled />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Basic Range，`step=20 defaultValue=[20, 80]` </p>\r\n\t\t\t\t\t<Slider.Range step={20} defaultValue={[20, 80]} onBeforeChange={this.log} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Basic Range，`step=20, dots defaultValue=[20, 40]` </p>\r\n\t\t\t\t\t<Slider.Range dots step={20} defaultValue={[20, 40]} onAfterChange={this.log} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Range as child component</p>\r\n\t\t\t\t\t<PureRenderRange />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" 数组变化的slider"},{"example":<Demo6 />,"title":" 竖直方向的slider","code":"/**\r\n*\r\n* @title 竖直方向的slider\r\n* @description 竖直vertical\r\n*\r\n*/\r\n\r\nclass Demo6 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t  const style={float: 'left',height: 400, marginBottom: 160, marginLeft: 50,width:200}\r\n\t  const parentStyle = { overflow: 'hidden' };\r\n\t\tconst marks = {\r\n\t\t\t0: <strong>0°C</strong>,\r\n\t\t\t26: '26°C',\r\n\t\t\t47: '47°C',\r\n\t\t\t100: {\r\n\t\t\t\tstyle: {\r\n\t\t\t\tcolor: 'red',\r\n\t\t\t\t},\r\n\t\t\t\tlabel: <strong>100°C</strong>\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\treturn (\r\n\t\t\t<div style={parentStyle}>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Slider with `marks, step=null`</p>\r\n\t\t\t\t\t<Slider vertical min={0} marks={marks} step={null} onChange={this.log} defaultValue={20} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Slider with `marks and steps=10`</p>\r\n\t\t\t\t\t<Slider vertical dots min={0} marks={marks} step={50} onChange={this.log} defaultValue={20} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Slider with `marks and steps默认是1 included=false`</p>\r\n\t\t\t\t\t<Slider vertical min={0} marks={marks} included={false} defaultValue={20} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Range with `marks steps默认是1,`</p>\r\n\t\t\t\t\t<Slider.Range vertical min={0} marks={marks} onChange={this.log} defaultValue={[20, 40]} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Range with `marks and steps=10`</p>\r\n\t\t\t\t\t<Slider.Range vertical min={0} marks={marks} step={10}onChange={this.log} defaultValue={[20, 40]}/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" 竖直vertical"},{"example":<Demo7 />,"title":" 带输入框的slider","code":"/**\r\n*\r\n* @title 带输入框的slider\r\n* @description 和 数字输入框 组件保持同步。\r\n*\r\n*/\r\n\r\nclass CustomizedSlider extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      value:45\r\n    };\r\n  }\r\n  onInputChange = (e) =>{\r\n    //console.log(e.target.value)\r\n    let value = parseInt(e.target.value);\r\n    if(value >= 100){\r\n      value = 100;\r\n    }else if(value <= 0 || e.target.value == ''){\r\n      value = 0;\r\n    }\r\n    this.changeValue(value)\r\n  }\r\n\r\n  onSliderChange = (value) => {\r\n    //console.log(value);\r\n    this.changeValue(value)\r\n  }\r\n  \r\n  changeValue = (value) =>{\r\n    this.setState({\r\n      value:value\r\n    })\r\n  }\r\n  render() {\r\n    return (\r\n      <div>\r\n        <input type=\"number\" value={this.state.value} onChange={this.onInputChange} />\r\n        <br /><br />\r\n        <Slider value={this.state.value} onChange={this.onSliderChange} />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nclass CustomizedRange extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      lowerBound: 20,\r\n      upperBound: 40,\r\n      value: [20, 40],\r\n    };\r\n  }\r\n\r\n  onLowerBoundChange = (e) => {\r\n    let upperBound = this.state.upperBound;\r\n    let value = parseInt(e.target.value);\r\n\r\n    if(value > upperBound){\r\n      value = upperBound\r\n    }else if(value <0 || value == ''){\r\n      value = 0;\r\n    }\r\n\r\n    this.setValue(value,upperBound);\r\n  }\r\n\r\n  onUpperBoundChange = (e) => {\r\n    let lowerBound = this.state.lowerBound;\r\n    let value = parseInt(e.target.value);\r\n\r\n    if(value < lowerBound){\r\n      value = lowerBound\r\n    }else if( value > 100 ){\r\n      value = 100;\r\n    }\r\n    this.setValue(lowerBound,value);\r\n  }\r\n  \r\n  onSliderChange = (value) => {\r\n    let upperBound = value[1];\r\n    let lowerBound = value[0];\r\n    this.setValue(lowerBound,upperBound);\r\n  }\r\n  \r\n  setValue = (lowerBound,upperBound) =>{\r\n    this.setState({\r\n      lowerBound:lowerBound,\r\n      upperBound:upperBound,\r\n      value:[lowerBound, upperBound] \r\n    })\r\n  }\r\n  \r\n  render() {\r\n    return (\r\n      <div>\r\n        <label>LowerBound: </label>\r\n        <input type=\"number\" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />\r\n        <br />\r\n        <label>UpperBound: </label>\r\n        <input type=\"number\" value={this.state.upperBound} onChange={this.onUpperBoundChange} />\r\n        <br /><br />\r\n        <Slider.Range value={this.state.value} onChange={this.onSliderChange} />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nclass Demo7 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet style={width:600,marginLeft:50,marginBottom:60}\r\n\t\treturn (\r\n\t\t\t<div>\r\n        <div style={style}>\r\n          <p>Customized Range</p>\r\n          <CustomizedSlider />\r\n        </div>\r\n\t\t\t\t<div style={style}>\r\n  \t\t\t\t<p>Customized Range</p>\r\n  \t\t\t\t<CustomizedRange />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" 和 数字输入框 组件保持同步。"},{"example":<Demo8 />,"title":" 带tip的slider","code":"/**\r\n*\r\n* @title 带tip的slider\r\n* @description 和 tip展示 组件保持同步。\r\n*\r\n*/\r\nconst createSliderWithTooltip = Slider.createSliderWithTooltip;\r\nconst RangeTootip = createSliderWithTooltip(Slider.Range);\r\nconst Handle = Slider.Handle;\r\n\r\nclass Demo8 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n  handle = (props) => {\r\n    const { value, dragging, index, ...restProps } = props;\r\n    return (\r\n      <Slider.Tooltip\r\n        prefixCls=\"rc-slider-tooltip\"\r\n        overlay={value}\r\n        visible={dragging}\r\n        placement=\"top\"\r\n        key={index}>\r\n        <Slider.Handle value={value} {...restProps} />\r\n      </Slider.Tooltip>\r\n    )\r\n  }\r\n\r\n\trender () {\r\n\t\tconst wrapperStyle = { width: 400, margin: 50 };\r\n\t\treturn (\r\n      <div>\r\n        <div style={wrapperStyle}>\r\n          <p>Slider with custom handle</p>\r\n          <Slider min={0} max={20} defaultValue={3} handle={this.handle} />\r\n        </div>\r\n        <div style={wrapperStyle}>\r\n          <p>Range with custom handle</p>\r\n          <RangeTootip min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />\r\n        </div>\r\n      </div>\r\n\t\t)\r\n\t}\r\n}","desc":" 和 tip展示 组件保持同步。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
