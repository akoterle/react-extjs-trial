/*global Ext*/
import React from 'react';
import { Panel } from '@extjs/ext-react';
import DragItem from './DragItem';

class DragHost extends React.Component {

    render() {
        return (
            <Panel
                title="ExtReact Panel"
                ref="dragContainer"
                height="100%"
                padding={5}
                shadow>
                <DragItem
                    ref="dragItemComp"
                    innerRef="dragItem"
                    dragText={this.props.dragText} />
            </Panel>
        )
    }

    componentDidMount() {
        const { handlers } = this.props
        this.source = new Ext.drag.Source({
            element: this.refs.dragItemComp.refs.dragItem.el,
            /*constrain: this.refs.dragContainer.el,*/
            listeners: {
                dragmove: handlers.dragMove, //.bind(this),
                dragend: handlers.dragEnd //.bind(this)
            }
        });
    }

    componentWillUnmount() {
        Ext.destroy(this.source);
    }


}

export default DragHost