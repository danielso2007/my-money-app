import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList } from './billingCycleActions';

const mapDispatchProps = dispatch => bindActionCreators({getList}, dispatch);

class BillingCycleList extends Component {

    componentWillMount() {
    }

    render() {
       return (
           <div>
               <table className='table'>
                   <thead>
                       <tr>
                           <th>Nome</th>
                           <th>Mês</th>
                           <th>Ano</th>
                       </tr>
                   </thead>
                   <tbody>
                   </tbody>
               </table>
           </div>
       )
    }

}

export default connect(null, mapDispatchProps)(BillingCycleList);
