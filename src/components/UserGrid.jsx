/*global Ext*/
import React, { Component } from 'react';
import { Grid, Column } from '@extjs/ext-react';

export default class UsersGrid extends Component {

    store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email'],
        data: [
            { name: 'Tim Smith', email: 'tim101@gmail.com' },
            { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
        ]
    })

    render() {
        return (
            <Grid title="Users" store={this.store} shadow height={200}>

                <Column text="Name" dataIndex="name" />
                <Column text="Email" dataIndex="email" />
            </Grid>
        )
    }

}