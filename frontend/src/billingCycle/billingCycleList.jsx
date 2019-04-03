import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList } from './billingCycleActions';

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchProps = dispatch => bindActionCreators({getList}, dispatch);

class BillingCycleList extends Component {

    componentWillMount() {
        // this.props.getList().then(() => console.log(this.props.list));
        this.props.getList();
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

export default connect(mapStateToProps, mapDispatchProps)(BillingCycleList);
