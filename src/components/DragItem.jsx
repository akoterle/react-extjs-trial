/*global Ext*/

import React from 'react';
import { connect } from 'react-redux'
import { Label } from '@extjs/ext-react';
import * as actions from '../actions'

Ext.require(['Ext.drag.*']);

class DragItem extends React.Component {

    render() {
        return (
            <Label
                ref={(me) => this.dragItem = me}
                html={this.props.dragText}
                zIndex={100}
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

    componentDidMount() {
        const handlers = {
            dragmove: (source, info) => {
                this.props.dispatch(actions.dragMove(source, info))
            },
            dragend: (source) => {
                this.props.dispatch(actions.dragEnd(source))
            }
        }
        this.source = new Ext.drag.Source({
            element: this.dragItem.el,
            constrain: this.props.constrain,
            listeners: { ...handlers }
        });
    }

    componentWillUnmount() {
        Ext.destroy(this.source);
    }
}

const mapStateToProps = (state) => {return { dragText: state.drag.dragText }}
export default connect(mapStateToProps)(DragItem)
