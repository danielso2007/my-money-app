import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';

import { selectTab } from '../common/tab/tabActions';

const mapDispatchProps = dispatch => bindActionCreators({selectTab}, dispatch);

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList');
    }
    
    render() {
       return (
        <div>
            <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label='Listar' icon='bars' target='tabList' title='Listar' />
                        <TabHeader label='Incluir' icon='plus' color='blue' target='tabCreate' title='Incluir' />
                        <TabHeader label='Alterar' icon='pencil' color='green' target='tabUpdate' title='Alterar' />
                        <TabHeader label='Excluir' icon='trash-o' color='red' target='tabDelete' title='Excluir' />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id='tabList'>Lista</TabContent>
                        <TabContent id='tabCreate'>Incluir</TabContent>
                        <TabContent id='tabUpdate'>Update</TabContent>
                        <TabContent id='tabDelete'>Delete</TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </div>
       )
    }

}

export default connect(null, mapDispatchProps)(BillingCycle);
