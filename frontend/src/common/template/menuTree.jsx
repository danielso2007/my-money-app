import React from 'react';
import { criarIdTag } from '../utils';

export default props => (
    <li className="treeview">
        <a id={criarIdTag(`tree_menu_link_${props.label}`)} href='#'>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul id={criarIdTag(`tree_menu_${props.label}`)} className="treeview-menu">
            {props.children}
        </ul>
    </li>
);