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
    Footer
 } from 'native-base';
 import { Platform, StyleSheet } from 'react-native';
 import colors from '@assets/colors';

export default class SectionCard extends React.Component {

    render() {
        return(
          <Container>
              <Card>
                <CardItem>
                    <Body>
                        <Text>
                            {this.props.title}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>
                        {this.props.section}
                    </Text>
                </CardItem>
              </Card>
          </Container>
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