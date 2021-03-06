import { Component } from 'react';

/**
 * StateProvider providers a value and a setState method. This is
 * useful when writing a component that is almost functional, but has
 * one piece of state. For example, a simple toggle switch.
 *
 * At Jetty, we prefer our components functional! So when possible, prefer
 * StateProvider over setState with a class component.
 *
 * It's also useful if, in a large component, you want a piece of state
 * that's only used in a small, isolated section of the code. If you use
 * setState, your code makes no guarantees about where this state can
 * be used. If you use StateProvider, you know that your state can only
 * be used in the scope of that component.
 *
 * It's similar to recompose's withState, but uses render props instead
 * of being an HOC.
 * https://github.com/acdlite/recompose/blob/master/docs/API.md#withstate
 * http://blog.jakoblind.no/recompose-withstate/
 *
 * @param {any}     initialValue
 * @param {func}    getInitialValue
 * @prop {any}      value        (passed as the first parameter to children)
 * @prop {function} setState     (passed as the second parameter to children)
 */

export default class StateProvider extends Component {
  state = {
    value: this.props.getInitialValue
      ? this.props.getInitialValue()
      : this.props.initialValue,
  };

  componentWillUnmount() {
    this.unmounted = true;
  }

  setValue = (value, cb) => {
    if (value !== this.state.value && !this.unmounted) {
      this.setState({
        value,
      }, cb);
    }
    return value;
  };

  render() {
    return this.props.children(
      this.state.value,
      this.setValue
    );
  }
}
