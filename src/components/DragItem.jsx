/*global Ext*/

import React from 'react';
import {Label, Button, GridCell} from '@extjs/ext-react';


Ext.require(['Ext.drag.*']);


class DragItem extends React.Component {

    render() {
        return (
            <GridCell
                ref="dragItem"
                style={{
                    width: '130px',
                    height: '130px',
                    padding: '5px',
                    textAlign: 'center',
                    color: '#fff',
                    backgroundColor: '#ff5722',
                    borderRadius: '5px',
                    userSelect: 'none',
                    cursor: 'move'
                }}
            >
            {this.props.dragText}
            </GridCell>
        )
    }

    componentDidMount() {
        this.source = new Ext.drag.Source({
            element: this.refs.dragItem.el,
            constrain: this.props.dragContainer, //this.refs.dragContainer.el,
            listeners: {
                dragmove: this.props.onDragMove, //.bind(this),
                dragend: this.props.onDragEnd //.bind(this)
            }
        });
    }

    componentWillUnmount() {
        Ext.destroy(this.source);
    }

}

export default DragItem