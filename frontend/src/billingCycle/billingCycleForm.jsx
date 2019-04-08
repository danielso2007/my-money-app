import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import labelAndInput from '../common/form/labelAndInput';
import { init } from './billingCycleActions';
import CreditList from './creditList';

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field inputName='nome' name='name' component={labelAndInput} readOnly={readOnly}
                           label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field inputName='mouth' name='month' component={labelAndInput} type='number' readOnly={readOnly}
                           label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field inputName='year' name='year' component={labelAndInput} type='number' readOnly={readOnly}
                           label='Ano' cols='12 4' placeholder='Informe o ano'/>
                    <CreditList />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
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