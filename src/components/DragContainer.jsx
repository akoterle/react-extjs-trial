import React from 'react';
import { Panel } from '@extjs/ext-react';
import DragItem from './DragItem';

class DragContainer extends React.Component {

    render() {
        const refs = this.refs
        return (
            <Panel title="ExtReact Panel" ref="dragContainer" padding={5} flex={1} shadow>
                <DragItem /*dragContainer={refs.dragContainer.el}*/ dragText={this.props.dragText} onDragMove={this.props.onDragMove} onDragEnd={this.props.onDragEnd} />
            </Panel>
        )
    }

    componentWillMount() {
        const refs = this.refs
    }
    componentDidMount() {
        const refs = this.refs
    }
}

export default DragContainer