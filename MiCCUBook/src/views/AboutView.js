import React from 'react';
import { 
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Text,
    Content,
} from 'native-base';
import { 
    StyleSheet,
    Dimensions, 
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
                    {/* Render Nothing Here */}
                </Left>
                <Body>
                    <Title style={ 
                        Platform.OS ==='ios' ? 
                            styles.header_title_text_ios : 
                            styles.header_title_text_android}>About</Title>
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
                        Michael P. Thomas, MD {"\n"}
                        DJM Software, LLC {"\n"}
                        Dori J. Mouawad {"\n"}
                        Jana Abumeri
                    </Text>
                    <Text style={styles.description_text}>
                        MiCCU is a mobile-based handbook designed to 
                        improve the clinical and educational experience 
                        of trainees rounding in the Cardiac Intensive Care
                         Unit (CCU) at the University of Michigan.
                    </Text>
                    </Container>
                    <Text style={styles.footer_text}>
                        Copyright © 2019 University of Michigan
                    </Text>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.TOP_HEADER_BACKGROUND,
    },
    header_title_text_ios: {
        color:colors.TOP_HEADER_TEXT_IOS,
    },
    header_title_text_android: {
        color:colors.TOP_HEADER_TEXT_ANDROID,
    },
    header_icons: {
        color:colors.TOP_HEADER_ICONS,
    },
    text_container: {
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    book_title_text: {
        fontSize: 20,
        paddingBottom: 10
    },
    acknowledgements_title_text: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    acknowledgements_text: {
        fontSize: 13,
        textAlign: 'center',
        paddingBottom: 10
    },
    footer_text: {
        justifyContent: 'flex-end',
        paddingBottom: 15,
        alignSelf: 'center'
    },
    description_text: {
        textAlign: 'center',
        alignItems: 'center'
    },
})