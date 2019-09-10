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
 import { Platform, StyleSheet, FlatList } from 'react-native';
 import colors from '@assets/colors';
 import SectionCard from '@components/SectionCard';

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
              <Content>
                <List>
                    <ListItem>
                        <SectionCard title='Here' section='Section 1'/>
                    </ListItem>
                    <ListItem>
                        <SectionCard  title='Here2' section='Section 2'/>
                    </ListItem>
                </List>
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