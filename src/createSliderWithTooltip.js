import React from 'react';
import PropTypes from 'prop-types';
//import Tooltip from 'rc-tooltip';
import Tooltip from 'bee-tooltip';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';
import Handle from './Handle';

export default function createSliderWithTooltip(Component) {
  return class ComponentWrapper extends React.Component {
    static propTypes = {
      tipFormatter: PropTypes.func,
      handleStyle: PropTypes.arrayOf(PropTypes.object),
      tipProps: PropTypes.object,
    };

    static defaultProps = {
      tipFormatter(value) { return value; },
      handleStyle: [{}],
      tipProps: {},
    };

    constructor(props) {
      super(props);
      this.state = { visibles: {} };
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      return
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

    handleWithTooltip = ({ value, dragging, index, disabled, ...restProps }) => {
      const {
        tipFormatter,
        tipProps,
        handleStyle,
      } = this.props;

      const {
        prefixCls = 'u-slider-tooltip',
        overlay = <Tooltip id="tooltip1" className="in" >{tipFormatter(value)}</Tooltip>,
        placement = 'top',
        ...restTooltipProps,
      } = tipProps;


      return (
        <OverlayTrigger
          {...restTooltipProps}
          className={prefixCls}
          overlay={overlay}
          shouldUpdatePosition = {true}
          placement={placement}
          visible={!disabled && (this.state.visibles[index] || dragging)}
          key={index}
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
