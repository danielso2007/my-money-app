import React, { Component } from 'react';
import Grid from '../common/layout/grid';
import { Field } from 'redux-form';
import Input from '../common/form/input';

class CreditList extends Component {

    renderRows() {
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr key={`credit_row_${index}`}>
                <td><Field name={`credits[${index}].name`} component={Input}
                           placeholder='Informe o nome' readOnly={this.props.readOnly}></Field></td>
                <td><Field name={`credits[${index}].value`} component={Input}
                           placeholder='Informe o valor' readOnly={this.props.readOnly}></Field></td>
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
                                <th>Ações</th>
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

export default CreditList;