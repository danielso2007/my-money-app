import React, { Component } from 'react';
import Grid from '../common/layout/grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, arrayInsert } from 'redux-form';
import Input from '../common/form/input';

class CreditList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', 'credits', index, item);
        }
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr key={`credit_row_${index}`}>
                <td><Field name={`credits[${index}].name`} component={Input}
                           placeholder='Informe o nome' readOnly={this.props.readOnly}></Field></td>
                <td><Field name={`credits[${index}].value`} component={Input} type='number'
                           placeholder='Informe o valor' readOnly={this.props.readOnly}></Field></td>
                <td>
                    <button type='button' className='btn btn-success margin_right_5' onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button type='button' className='btn btn-warning' onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <Grid id='grid_credits' cols={this.props.cols}>
                <fieldset id='fieldset_credits'>
                    <legend>Créditos</legend>
                    <table id='table_credit_list' className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions-list'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}

const mapDispatchProps = dispatch => bindActionCreators({arrayInsert}, dispatch);

export default connect(null, mapDispatchProps)(CreditList);;