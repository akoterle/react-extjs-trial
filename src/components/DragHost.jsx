/*global Ext*/
import React from 'react';
import { Panel } from '@extjs/ext-react';
import DragItem from './DragItem';

class DragHost extends React.Component {

    render() {
        return (
            <Panel title="ExtReact Panel" ref="dragContainer" padding={5} flex={1} shadow>
                <DragItem ref="dragItemComp" innerRef="dragItem" dragText={this.props.dragText} />
            </Panel>
        )
    }

    componentDidMount() {
        this.source = new Ext.drag.Source({
            element: this.refs.dragItemComp.refs.dragItem.el,
            constrain: this.refs.dragContainer.el,
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

export default DragHost