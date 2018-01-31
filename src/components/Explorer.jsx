import React, {Component} from 'react';
import KeenExplorer from 'keen-explorer/dist/keen-explorer'; // eslint-disable-line no-unused-vars

class Explorer extends Component {
  componentDidMount() {
    this.explorer = new window.Keen.Explorer.App(this.explorerElement)
      .client(this.props.keen.config)
      .persistence(true)
      .fetch();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div ref={(element) => (this.explorerElement = element)}>Explorer</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Explorer;
