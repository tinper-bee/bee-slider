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
				      <Slider defaultValue={20} onAfterChange={this.log} tipFormatter={value => `${value}%`}/>
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
}