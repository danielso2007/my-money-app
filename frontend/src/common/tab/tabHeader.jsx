import React, { Component } from 'react';

class TabHeader extends Component {
    render() {
        return (
            <li>
                <a href='javascript:;' data-toggle='tab' title={this.props.title}
                   data-target={this.props.target}>
                       <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        );
    }
}

export default TabHeader;