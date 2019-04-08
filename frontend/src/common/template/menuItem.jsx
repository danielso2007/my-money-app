import React from 'react';
import { criarIdTag } from '../utils';

export default props => (
    <li>
        <a id={criarIdTag(`menu_${props.label}`)} href={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </a>
    </li>
);