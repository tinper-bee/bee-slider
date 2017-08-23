
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

const style = { width: 600, margin: 50 };
class Demo1 extends Component {
	
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		return (
					<div>
					<div style={style}>
				      <p>Basic Slider，step默认1</p>
				      <Slider defaultValue={20} onAfterChange={this.log} />
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
				      <p>Controlled Slider，不可滑动</p>
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
		let style={width:600,marginLeft:50}
		return (
				<div>
					<div style={style}>
						<p>Basic Slider，`step=20, dots`</p>
						<Slider dots step={20} defaultValue={60} onAfterChange={this.log}/>
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
		let style={width:600,marginLeft:50}
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
* @description 
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
				<p>（4）Slider with marks and `dots steps=20`</p>
				<Slider dots min={0} marks={marksOther} step={20} defaultValue={58} onChange={this.log} />
				</div>
				<div style={style}>
				<p>（3）Slider with marks, `step=null`，因此step = marks</p>
				<Slider min={0} marks={marksOther} step={null} defaultValue={68} onChange={this.log}  />
				</div>
				<div style={style}>
				<p>Slider with marks, `included=false`</p>
				<Slider min={0} marks={marksOther} included={false} defaultValue={20} />
				</div>
				<div style={style}>
				<p>Slider with marks and `steps=10,included=false`</p>
				<Slider min={-10} marks={marks} step={10} included={false} defaultValue={20} />
				</div>
				<div style={style}>
				<p>Range with marks</p>
				<Slider.Range min={-10} marks={marks} onChange={this.log} defaultValue={[20, 40]} />
				</div>
				<div style={style}>
				<p>Range with marks and steps</p>
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
}var DemoArray = [{"example":<Demo1 />,"title":" 标准slider","code":"/**\n*\n* @title 标准slider\n* @description 基础的slider\n*\n*/\n\nconst style = { width: 600, margin: 50 };\nclass Demo1 extends Component {\n\t\n\tlog = (value) =>{\n\tconsole.log(value); //eslint-disable-line\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t\t\t<div>\n\t\t\t\t\t<div style={style}>\n\t\t\t\t      <p>Basic Slider，step默认1</p>\n\t\t\t\t      <Slider defaultValue={20} onAfterChange={this.log} />\n\t\t\t\t    </div>\n\t\t\t\t    <div style={style}>\n\t\t\t\t      <p>Basic Slider，step=20</p>\n\t\t\t\t      <Slider step={20} defaultValue={40} onAfterChange={this.log} />\n\t\t\t\t    </div>\n\t\t\t\t    <div style={style}>\n\t\t\t\t      <p>Basic Slider, disabled</p>\n\t\t\t\t       <Slider disabled defaultValue={60} />\n\t\t\t\t    </div>\n\t\t\t\t    <div style={style}>\n\t\t\t\t      <p>Controlled Slider，不可滑动</p>\n\t\t\t\t      <Slider value={40} />\n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t)\n\t}\n}","desc":" 基础的slider"},{"example":<Demo2 />,"title":" 带有dots的slider(dots间","code":"/**\r\n*\r\n* @title 带有dots的slider(dots间距同step)\r\n* @description 基础的slider\r\n*\r\n*/\r\n\r\nclass Demo2 extends Component {\r\n\t\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet style={width:600,marginLeft:50}\r\n\t\treturn (\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>Basic Slider，`step=20, dots`</p>\r\n\t\t\t\t\t\t<Slider dots step={20} defaultValue={60} onAfterChange={this.log}/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style={style}>\r\n\t\t\t\t\t\t<p>Basic Slider，`step=10, dots, dotStyle={\"{borderColor: 'orange'}\"}, activeDotStyle={\"{borderColor: 'yellow'}\"}`</p>\r\n\t\t\t\t\t\t<Slider dots step={10} defaultValue={100} onAfterChange={this.log} dotStyle={{ borderColor: 'orange' }} activeDotStyle={{ borderColor: 'yellow' }} />\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" 基础的slider"},{"example":<Demo3 />,"title":" 自定义slider","code":"/**\r\n*\r\n* @title 自定义slider\r\n* @description 自定义slider样式（track,handle,rail等样式自定义）\r\n*\r\n*/\r\n\r\nclass Demo3 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet style={width:600,marginLeft:50}\r\n\t\treturn (\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t\t<p>Slider with custom handle and track style.</p>\r\n\t\t\t\t\t<Slider\r\n\t\t\t\t\tdefaultValue={30}\r\n\t\t\t\t\ttrackStyle={{ backgroundColor: 'blue', height: 10 }}\r\n\t\t\t\t\thandleStyle={{\r\n\t\t\t\t\tborderColor: 'blue',\r\n\t\t\t\t\theight: 28,\r\n\t\t\t\t\twidth: 28,\r\n\t\t\t\t\tmarginLeft: -14,\r\n\t\t\t\t\tmarginTop: -9,\r\n\t\t\t\t\tbackgroundColor: 'pink',\r\n\t\t\t\t\t}}\r\n\t\t\t\t\trailStyle={{ backgroundColor: 'red', height: 10 }}\r\n\t\t\t\t\t/>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t)\r\n\t\t}\r\n}","desc":" 自定义slider样式（track,handle,rail等样式自定义）"},{"example":<Demo4 />,"title":" 带有marks的slider","code":"/**\r\n*\r\n* @title 带有marks的slider\r\n* @description \r\n*\r\n*/\r\nclass Demo4 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet style={width:600,marginLeft:50,marginBottom:60};\r\n\t\tconst marks = {\r\n\t\t\t'-10': '-10°C',\r\n\t\t\t0: <strong>0°C</strong>,\r\n\t\t\t26: '26°C',\r\n\t\t\t47: '47°C',\r\n\t\t\t100: {\r\n\t\t\t\tstyle: {\r\n\t\t\t\tcolor: 'red',\r\n\t\t\t\t},\r\n\t\t\t\tlabel: <strong>100°C</strong>\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tconst marksOther = {\r\n\t\t\t0: <strong>0°C</strong>,\r\n\t\t\t33: '33°C',\r\n\t\t\t87: '87°C',\r\n\t\t\t100: {\r\n\t\t\t\tstyle: {\r\n\t\t\t\tcolor: 'red',\r\n\t\t\t\t},\r\n\t\t\t\tlabel: <strong>100°C</strong>\r\n\t\t\t}\r\n\t\t};\r\n\t\treturn (\r\n\t\t\t\t<div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t<p>（1）Slider with marks,`steps默认是1`</p>\r\n\t\t\t\t<Slider min={-10} marks={marks} defaultValue={33} onChange={this.log}  />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t<p>（2）Slider with marks and `steps=20`</p>\r\n\t\t\t\t<Slider min={0} marks={marksOther} step={20} defaultValue={58} onChange={this.log} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t<p>（4）Slider with marks and `dots steps=20`</p>\r\n\t\t\t\t<Slider dots min={0} marks={marksOther} step={20} defaultValue={58} onChange={this.log} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t<p>（3）Slider with marks, `step=null`，因此step = marks</p>\r\n\t\t\t\t<Slider min={0} marks={marksOther} step={null} defaultValue={68} onChange={this.log}  />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t<p>Slider with marks, `included=false`</p>\r\n\t\t\t\t<Slider min={0} marks={marksOther} included={false} defaultValue={20} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t<p>Slider with marks and `steps=10,included=false`</p>\r\n\t\t\t\t<Slider min={-10} marks={marks} step={10} included={false} defaultValue={20} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t<p>Range with marks</p>\r\n\t\t\t\t<Slider.Range min={-10} marks={marks} onChange={this.log} defaultValue={[20, 40]} />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style={style}>\r\n\t\t\t\t<p>Range with marks and steps</p>\r\n\t\t\t\t<Slider.Range min={-10} marks={marks} step={10} onChange={this.log} defaultValue={[20, 40]} />\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" "},{"example":<Demo5 />,"title":" rangeSlider","code":"/**\r\n*\r\n* @title rangeSlider\r\n* @description 数组变化的slider\r\n*\r\n*/\r\nclass CustomizedRange extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      lowerBound: 20,\r\n      upperBound: 40,\r\n      value: [20, 40],\r\n    };\r\n  }\r\n\r\n  onLowerBoundChange = (e) => {\r\n    let upperBound = this.state.upperBound;\r\n    let value = parseInt(e.target.value);\r\n    if(parseInt(e.target.value) >upperBound){\r\n      value = this.state.upperBound\r\n    }else if(parseInt(e.target.value)>100){\r\n      value = 100;\r\n    }else if(e.target.value<0){\r\n      value = 0;\r\n    }\r\n    this.setState({ lowerBound: value });\r\n    this.handleApply();\r\n\r\n  }\r\n\r\n  onUpperBoundChange = (e) => {\r\n    let lowerBound = this.state.lowerBound;\r\n    let value = parseInt(e.target.value);\r\n    if(parseInt(e.target.value) < lowerBound){\r\n      value = this.state.lowerBound\r\n    }else if(parseInt(e.target.value)>100){\r\n      value = 100;\r\n    }else if(e.target.value<0){\r\n      value = 0;\r\n    }\r\n    \r\n    this.setState({ upperBound: value });\r\n    this.handleApply();\r\n  }\r\n  \r\n  onSliderChange = (value) => {\r\n    console.log(value);\r\n    this.setState({\r\n      value,\r\n    });\r\n  }\r\n  \r\n  handleApply = () => {\r\n    const { lowerBound, upperBound } = this.state;\r\n    this.setState({ value: [lowerBound, upperBound] });\r\n  }\r\n  \r\n  render() {\r\n    return (\r\n      <div>\r\n        <label>LowerBound: </label>\r\n        <input type=\"number\" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />\r\n        <br />\r\n        <label>UpperBound: </label>\r\n        <input type=\"number\" value={this.state.upperBound} onChange={this.onUpperBoundChange} />\r\n        {/*<br />\r\n        <button onClick={this.handleApply}>Apply</button>*/}\r\n        <br /><br />\r\n        <Slider.Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n// https://github.com/react-component/slider/issues/226\r\nclass PureRenderRange extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      foo: false,\r\n    };\r\n  }\r\n  handleChange = (value) => {\r\n    console.log(value);\r\n    this.setState({\r\n      foo: !this.state.foo,\r\n    });\r\n  }\r\n  render() {\r\n    return (\r\n      <Slider.Range defaultValue={[20, 40, 60, 80]} onChange={this.handleChange} allowCross={false} />\r\n    );\r\n  }\r\n}\r\n\r\nclass Demo5 extends Component {\r\n\tlog = (value) =>{\r\n\tconsole.log(value); //eslint-disable-line\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet style={width:600,marginLeft:50}\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t<div style={style}>\r\n\t\t\t<p>Basic Range，`allowCross=false step默认是1 defaultValue=[0, 20]`</p>\r\n\t\t\t<Slider.Range allowCross={false} defaultValue={[0, 20]} onChange={this.log} />\r\n\t\t\t</div>\r\n\t\t\t<div style={style}>\r\n\t\t\t<p>Basic Range，`allowCross=true step默认是1 defaultValue=[10, 40]`</p>\r\n\t\t\t<Slider.Range defaultValue={[10, 40]} onChange={this.log} />\r\n\t\t\t</div>\r\n\t\t\t<div style={style}>\r\n\t\t\t<p>Basic Range，`disabled defaultValue=[0, 20]`</p>\r\n\t\t\t<Slider.Range allowCross={false} defaultValue={[0, 20]} onChange={this.log} disabled />\r\n\t\t\t</div>\r\n\t\t\t<div style={style}>\r\n\t\t\t<p>Basic Range，`step=20 defaultValue=[20, 80]` </p>\r\n\t\t\t<Slider.Range step={20} defaultValue={[20, 80]} onBeforeChange={this.log} />\r\n\t\t\t</div>\r\n\t\t\t<div style={style}>\r\n\t\t\t<p>Basic Range，`step=20, dots defaultValue=[20, 40]` </p>\r\n\t\t\t<Slider.Range dots step={20} defaultValue={[20, 40]} onAfterChange={this.log} />\r\n\t\t\t</div>\r\n\t\t\t<div style={style}>\r\n\t\t\t<p>Customized Range</p>\r\n\t\t\t<CustomizedRange />\r\n\t\t\t</div>\r\n\t\t\t<div style={style}>\r\n\t\t\t<p>Range as child component</p>\r\n\t\t\t<PureRenderRange />\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" 数组变化的slider"}]


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
