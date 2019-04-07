import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INICIAL_VALUES = {};

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch =>{
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.');
                dispatch([
                    init()
                ]);
            })
            .catch(e => {
                console.error(e);
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            });
    };
};

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm',billingCycle)
    ]
};

export function update(values) {
    return dispatch =>{
        axios.put(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.');
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ]);
            })
            .catch(e => {
                console.error(e);
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            });
    };
};

export function init() {
    return [
        getList(),
        selectTab('tabList'),
        showTabs('tabList', 'tabCreate'),
        initialize('billingCycleForm', INICIAL_VALUES)
    ];
}