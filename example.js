import React from 'react'
import { View, Text } from 'react-native'
import DraggableList from 'react-native-draggable-list'

export default class Example extends React.Component {
  constructor() {
    super()
    this.state = {highlightIndex: -1, listPosition: 1}
  }
  render() {
    return (
      <View style={{paddingTop:50}}>
        <Text style={{fontSize: 24}}>List Position: {this.state.listPosition}</Text>
        <DraggableList
            style={{left: 20, right: 20}}
            topOffset={[ 120, 220, 350 ]}
            expandedHeight={450}
            onTouchEnd={() => this.setState({ highlightIndex: -1 })}
            onTouchStart={location => this.setState({ highlightIndex: Math.floor(location / 60) })}
            onMove={() => this.setState({ highlightIndex: -1 })}
            childrenHeight={1200}
            startPosition={1}
            onPositionChange={(listPosition) => this.setState({listPosition})}>
            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(n =>
              <View key={n} style={{height: 60, flex: 1, backgroundColor: this.state.highlightIndex === n ? 'yellow' : n%2?'green':'red', left:0, right:0}}>
                <Text style={{fontSize: 20}}>{n}</Text>
              </View>
            )}
        </DraggableList>
      </View>
    )
  }
}
