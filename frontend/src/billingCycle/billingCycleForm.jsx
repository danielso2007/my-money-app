import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import labelAndInput from '../common/form/labelAndInput';
import { init } from './billingCycleActions';

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field inputName='nome' name='name' component={labelAndInput}
                           label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field inputName='mouth' name='month' component={labelAndInput} type='number'
                           label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field inputName='year' name='year' component={labelAndInput} type='number'
                           label='Ano' cols='12 4' placeholder='Informe o ano'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default margin_left_10'
                            onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        );
    }
}

const mapDispatchProps = dispatch => bindActionCreators({init}, dispatch);
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);

export default connect(null, mapDispatchProps)(BillingCycleForm);