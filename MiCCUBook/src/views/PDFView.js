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
} from 'native-base';
import { 
    Platform, 
    StyleSheet, 
    Dimensions, 
} from 'react-native';
import colors from '@assets/colors';
import Pdf from 'react-native-pdf';

export default class PDFView extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            pageNumber: 0,
        }

        this.onBackPressed = this.onBackPressed.bind(this);
    }

    componentDidMount() {
        const { navigation } = this.props

        console.log(navigation)

        this.setState({
            title: navigation.getParam('title', ''),
            pageNumber: navigation.getParam('pdfPageNumber', ''),
        })
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
                <Body style={{flex: 3}}>
                    <Title style={styles.header_title_text}>{this.state.title}</Title>
                </Body>
                <Right>
                    {/* Render Nothing Here */}
                </Right>
            </Header>
        )
    }

    renderPdfView() {
        const source = require('../assets/pdf/CICUHandbook_v13.pdf')
        return (
            <Pdf 
                source={source}
                style={styles.pdf}
                page={this.state.pageNumber}
            />
        )
    }

    render() {
        return (
            <Container>
                {this.renderHeader()}
                {this.renderPdfView()}
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
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})