/*global Ext*/

import React from 'react';
import {Label, Button, GridCell} from '@extjs/ext-react';


Ext.require(['Ext.drag.*']);


class DragItem extends React.Component {

    render() {
        return (
            <Label
                ref={this.props.innerRef}
                html={this.props.dragText}
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
            </Label>
        )
    }


}

export default DragItem