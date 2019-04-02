import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 0.1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10' text='Total de Créditos'></ValueBox>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 20' text='Total de Débitos'></ValueBox>
                        <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0' text='Value Consolidado'></ValueBox>
                    </Row>
                </Content>
            </div>
        );
    }
}