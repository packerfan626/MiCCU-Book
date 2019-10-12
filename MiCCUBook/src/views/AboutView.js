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
    Content,
} from 'native-base';
import { 
    Platform, 
    StyleSheet 
} from 'react-native';
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
                    <Title style={styles.header_title_text}>About</Title>
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
                    <Container style={styles.text_container}>
                        <Text style={styles.book_title_text}>
                            The University of Michigan MiCCU Book
                        </Text>
                        <Text style={styles.acknowledgements_title_text}>
                            Acknowledgements
                        </Text>
                        <Text style={styles.acknowledgements_text}>
                            Sarah Adie, PharmD {"\n"}
                            Ahmad A. Abdul-A ziz, MD {"\n"}
                            Ran Lee, MD {"\n"}
                            Michael P. Thomas, MD
                        </Text>
                        <Text>
                            Brief Description of Handbook {"\n"}
                            Brief Description of Handbook {"\n"}
                            Brief Description of Handbook {"\n"}
                            Brief Description of Handbook {"\n"}
                            Brief Description of Handbook {"\n"}
                            Brief Description of Handbook {"\n"}
                        </Text>
                        <Text style={styles.footer_text}>
                            Copyright © 2019 University of Michigan
                        </Text>
                    </Container>
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
    },
    text_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    book_title_text: {
        paddingBottom: 10
    },
    acknowledgements_title_text: {
        fontWeight: 'bold'
    },
    acknowledgements_text: {
        textAlign: 'center',
        paddingBottom: 10
    },
    footer_text: {
        justifyContent: 'flex-end',
        marginTop: 269
    }
})