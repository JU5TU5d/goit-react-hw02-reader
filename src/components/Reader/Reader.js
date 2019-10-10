import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import css from './Reader.module.css';

class Reader extends Component {
  state = { value: 0 };

  static defaultProps = {
    items: [],
    count: 1,
  };

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape()),
    count: PropTypes.number,
  };

  handleIncrement = () => {
    if (this.state.value === this.props.items.length - 1) {
      return;
    }
    this.setState(state => ({
      value: state.value + this.props.count,
    }));
  };

  handleDecrement = () => {
    if (this.state.value === 0) {
      return;
    }
    this.setState(state => ({
      value: state.value - this.props.count,
    }));
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;
    // console.log(value);
    return (
      <div className={css.reader}>
        <Counter
          value={value}
          length={items.length}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        <Publication items={items[value]} />
      </div>
    );
  }
}

export default Reader;
