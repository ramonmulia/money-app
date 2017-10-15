import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete } from './billingCycleActions';

class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        return this.props.list.map(l => (
            <tr key={l._id}>
                <td>{l.name}</td>
                <td>{l.month}</td>
                <td>{l.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(l)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(l)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);