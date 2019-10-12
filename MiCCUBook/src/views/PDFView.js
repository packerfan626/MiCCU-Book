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
    Item,
    List,
    Content,
    Input
 } from 'native-base';
 import { 
     Platform, 
     StyleSheet 
} from 'react-native';
 import colors from '@assets/colors';
 import SectionCard from '@components/SectionCard';

export default class PDFView extends React.Component {

    constructor(props){
        super(props);

        this.onBackPressed = this.onBackPressed.bind(this);
    }

    onBackPressed = () => {
        this.props.navigation.goBack();
    }

    renderHeader() {
        return (
            <Header searchBar>
                <Left>
                    <Button transparent onPress={this.onBackPressed}>
                        { Platform.OS === 'ios' ? 
                            <Icon name='ios-arrow-back' style={styles.header_icons}/> : 
                            <Icon name='md-arrow-back' style={styles.header_icons}/> }  
                     </Button>   
                </Left>
                <Body style={{flex: 2}}>
                    <Title style={styles.header_title_text}>SECTION TITLE</Title>
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