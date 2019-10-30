import React from 'react';
import { 
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Text,
    List,
    ListItem,
    Content
 } from 'native-base';
 import { Platform, StyleSheet } from 'react-native';
 import colors from '@assets/colors';

export default class CalculatorView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
          <Container>
              <Content>
                  <Text>Coming Soon</Text>
              </Content>
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