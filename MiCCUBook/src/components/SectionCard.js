import React from 'react';
import { 
    Container,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Text,
    Card,
    CardItem,
    Content,
} from 'native-base';
import { 
    Platform, 
    StyleSheet,
    TouchableOpacity 
} from 'react-native';
import colors from '@assets/colors';

export default class SectionCard extends React.Component {

    onCardPressed = () => {
        console.log('Card Pressed')
    }

    render() {
        return (
          <Content>
              <TouchableOpacity onPress={() => this.onCardPressed()}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                {this.props.title}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text>
                            {this.props.section}
                        </Text>
                    </CardItem>
                </Card>
              </TouchableOpacity>
          </Content>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.TOP_HEADER_BACKGROUND,
    },
    header_title_text: {
        color:colors.TOP_HEADER_TEXT,
    },
    header_icons: {
        color:colors.TOP_HEADER_ICONS,
    }
})