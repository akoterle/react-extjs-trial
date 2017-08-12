/*global Ext*/
import React from 'react';
import { Panel } from '@extjs/ext-react';
import DragItem from './DragItem';

export default class DragHost extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dragItem: undefined
        }
    }

    render() {
        return (
            <Panel
                title="ExtReact Panel"
                ref={(me) => this.panel = me}
                height="100%"
                padding={5}
                shadow>
                {this.state.dragItem}
            </Panel>
        )
    }

    componentDidMount() {
        this.setState((prevState, props) => {
            return {
                dragItem: <DragItem
                    constrain={this.panel.el} />
            }
        })
    }
}


