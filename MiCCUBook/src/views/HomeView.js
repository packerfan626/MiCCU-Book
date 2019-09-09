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
 } from 'native-base';
 import { Platform, StyleSheet } from 'react-native';
 import colors from '@assets/colors';

export default class HomeView extends React.Component {

    constructor(props){
        super(props);
    }

    renderHeader(){
        return(
            <Header>
                <Left>
                    <Button transparent>
                        {Platform.OS === 'ios' ? 
                            <Icon name='ios-information-circle' style={styles.header_icons}/> : 
                            <Icon name='md-information-circle' style={styles.header_icons}/> }  
                     </Button>   
                </Left>
                <Body>
                    <Title>MiCCU</Title>
                </Body>
                <Right>
                    {/* Render Nothing Here */}
                </Right>
            </Header>
        )
    }

    render() {
        return(
          <Container>
              {this.renderHeader()}
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