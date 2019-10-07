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

export default class AboutView extends React.Component {

    constructor(props){
        super(props);
    }

    closeButtonPressed = () => {
        this.props.navigation.goBack()
    }

    renderHeader(){
        return(
            <Header>
                <Left>
                    <Button transparent onPress={() => this.closeButtonPressed()}>
                        { Platform.OS === 'ios' ? 
                            <Icon name='ios-close' style={styles.header_icons}/> : 
                            <Icon name='md-close' style={styles.header_icons}/> }  
                     </Button>   
                </Left>
                <Body>
                    <Title>About</Title>
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
              <Content>

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