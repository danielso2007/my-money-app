import React, { Component } from 'react';

import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

const mapStateToProps = state => ({summary: state.dashboard.summary});

class Dashboard extends Component {
    render() {

        const { credit, debt } = this.props.summary;

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 0.1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos'></ValueBox>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos'></ValueBox>
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Value Consolidado'></ValueBox>
                    </Row>
                </Content>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);