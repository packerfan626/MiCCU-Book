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
    List,
    Content,
 } from 'native-base';
 import { 
     Platform, 
     StyleSheet 
} from 'react-native';
 import colors from '@assets/colors';
 import SectionCard from '@components/SectionCard';

export default class HomeView extends React.Component {

    constructor(props){
        super(props);
    }

    aboutButtonPressed = () => {
        this.props.navigation.navigate('About');
    }

    renderHeader() {
        return (
            <Header searchBar>
                <Left>
                    <Button transparent onPress={() => this.aboutButtonPressed()}>
                        { Platform.OS === 'ios' ? 
                            <Icon name='ios-information-circle-outline' style={styles.header_icons}/> : 
                            <Icon name='md-information-circle-outline' style={styles.header_icons}/> }  
                     </Button>   
                </Left>
                <Body>
                    <Title style={styles.header_title_text}>MiCCU</Title>
                </Body>
                <Right>
                    {/* Render Nothing Here */}
                </Right>
            </Header>
        )
    }

    render() {
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <List>
                        <SectionCard id='1' title='Here' section='Section 1' navigation={this.props.navigation}/>
                        <SectionCard id='2' title='Here2' section='Section 2' navigation={this.props.navigation}/>
                        <SectionCard id='3' title='Here3' section='Section 3' navigation={this.props.navigation}/>
                        <SectionCard id='4' title='Here4' section='Section 4' navigation={this.props.navigation}/>
                        <SectionCard id='5' title='Here5' section='Section 5' navigation={this.props.navigation}/>
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