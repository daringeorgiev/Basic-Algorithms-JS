import React, {Component, PropTypes} from 'react'

// Rewrite class from npm react-gist https://github.com/tleunen/react-gist

class gist extends Component {
  componentDidMount() {
    this._updateIframeContent()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.id !== nextProps.id
  }

  componentDidUpdate(prevProps, prevState) {
    this._updateIframeContent()
  }

  _updateIframeContent() {
    let iframe = this.refs.iframe

    let doc = iframe.document
    if (iframe.contentDocument) {
      doc = iframe.contentDocument
    } else if (iframe.contentWindow) {
      doc = iframe.contentWindow.document
    }

    let gistScript = '<script type="text/javascript" src="https://gist.github.com/' + this.props.id + '.js"></script>'
    let styles = '<style>*{font-size:12px;}</style>'
    let resizeScript = 'onload="parent.document.getElementById(\'gist-' + this.props.id + '\').style.height=document.body.scrollHeight + \'px\'"'
    let iframeHtml = '<html><head><base target="_parent">' + styles + '</head><body ' + resizeScript + '>' + gistScript + '</body></html>'

    doc.open()
    doc.writeln(iframeHtml)
    doc.close()
  }

  render() {
    return (
      <div>
        <iframe id={'gist-' + this.props.id} ref='iframe' width='100%' frameBorder='0' />
      </div>
    )
  }
}

gist.propTypes = {
  id: React.PropTypes.string.isRequired
}

export default gist
