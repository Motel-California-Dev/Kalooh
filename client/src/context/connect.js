import React from 'react';

export default connect = (Consumer) => (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Consumer>
          {
            (state) => (
              <Component
                {...this.props}
                {...state}
              />
            )
          }
        </Consumer>
      );
    }
  }
};

