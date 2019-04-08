import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelAndInput from '../common/form/labelAndInput';
import { init } from './billingCycleActions';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field inputName='nome' name='name' component={LabelAndInput} readOnly={readOnly}
                           label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field inputName='mouth' name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                           label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field inputName='year' name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                           label='Ano' cols='12 4' placeholder='Informe o ano'/>
                    <Summary credit={1000} debt={233} />
                    <ItemList cols='12 12 6 6' list={credits} readOnly={readOnly}
                            field='credits' legend='Créditos' />
                    <ItemList cols='12 12 6 6' list={credits} readOnly={readOnly}
                            field='debts' legend='Débitos' showStatus={true} />
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

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');

const mapDispatchProps = dispatch => bindActionCreators({init}, dispatch);
const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') });

export default connect(mapStateToProps, mapDispatchProps)(BillingCycleForm);