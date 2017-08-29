import React from 'react';
import PropTypes from 'prop-types';
//import Tooltip from 'rc-tooltip';
import Tooltip from 'bee-tooltip';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';
import Handle from './Handle';
console.log(Tooltip, OverlayTrigger);

export default function createSliderWithTooltip(Component) {
  return class ComponentWrapper extends React.Component {
    
    static propTypes = {
      tipFormatter: PropTypes.func,
      handleStyle: PropTypes.arrayOf(PropTypes.object),
      tipProps: PropTypes.object,
    };

    static defaultProps = {
      //tipFormatter(value) { return value; },
      tipFormatter(value){return <Tooltip id="tooltip5" positionTop="20px">${value}</Tooltip> },
      handleStyle: [{}],
      tipProps: {},
    };

    constructor(props) {
      super(props);
      this.state = { visibles: {} };
    }

    handleTooltipVisibleChange = (index, visible) => {
      this.setState((prevState) => {
        return {
          visibles: {
            ...prevState.visibles,
            [index]: visible,
          },
        };
      });
    }

    toolTipFunc = (value) =>{
      return(
        <Tooltip id="tooltip5" positionTop="20px">${value}</Tooltip>
      )
    }

    handleWithTooltip = ({ value, dragging, index, disabled, ...restProps }) => {
      
      const {
        tipFormatter,
        tipProps,
        handleStyle,
      } = this.props;

      const {
        prefixCls = 'u-slider-tooltip',
        overlay = toolTipFunc(value),
        placement = 'top',
        ...restTooltipProps,
      } = tipProps;

      return (
        <OverlayTrigger
          {...restTooltipProps}
          prefixCls={prefixCls}
          overlay={overlay}
          placement={placement}
          //visible={!disabled && (this.state.visibles[index] || dragging)}
         // key={index}
        >
          <Handle
            {...restProps}
            style={{
              ...handleStyle[0],
            }}
            value={value}
            onMouseEnter={() => this.handleTooltipVisibleChange(index, true)}
            onMouseLeave={() => this.handleTooltipVisibleChange(index, false)}
          />
        </OverlayTrigger>
      );
    }

    render() {
      return <Component {...this.props} handle={this.handleWithTooltip} />;
    }
  };
}
