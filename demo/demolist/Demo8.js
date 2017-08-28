/**
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
        prefixCls="u-slider-tooltip"
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
}