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
    Spinner,
} from 'native-base';
import { 
    Platform, 
    StyleSheet 
} from 'react-native';
import colors from '@assets/colors';
import SectionCard from '@components/SectionCard';
import RNFS from 'react-native-fs';
import { openDatabase } from 'react-native-sqlite-storage';

// // Connection to access pre-populated MiCCU.db
var db = openDatabase({ name: 'MiCCU.db', createFromLocation : 1});

export default class HomeView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sections: [],
            isLoading: false,
        }
    }

    async componentDidMount() {
        await this.getSectionsFromDb()
    }

    getSectionsFromDb() {
        this.setState({
            isLoading: true
        })

        db.transaction(txn => {
            txn.executeSql('SELECT * FROM Sections WHERE isSubSection=0', [], (txn, results) => {
                var temp = []
                for (let i = 0; i < results.rows.length; i++){
                    temp.push(results.rows.item(i))
                }
                this.setState({
                    sections: temp
                })
            })
        })

        this.setState({
            isLoading: false
        })
    }

    downloadButtonPressed = () => {
        // const file = 'CICUHandbook_v13.pdf'
        // const fullFileDirectory = require('../assets/pdf/CICUHandbook_v13.pdf')
        // const dest = `${RNFS.DocumentDirectoryPath}/${file}`
        // RNFS.copyFile(fullFileDirectory, dest)
        // .then(() => {
        //     console.log('Success')
        // })
        // .catch(_err => {
        //     console.log(err)
        // });
        // // this.props.navigation.navigate('About');
        // console.log('Download Button Pressed')
    }

    renderSpinner() {
        return (
            <View>
                <Spinner color={colors.MICHIGAN_BLUE} />
            </View>
        )
    }

    renderHeader() {
        return (
            <Header searchBar>
                <Left>
                    <Button disabled transparent onPress={() => this.downloadButtonPressed()}>
                        { Platform.OS === 'ios' ? 
                            <Icon name='ios-download' style={styles.header_icons_ios}/> : 
                            <Icon name='md-download' style={styles.header_icons_android}/> }  
                     </Button>   
                </Left>
                <Body>
                    <Title style={ 
                        Platform.OS ==='ios' ? 
                            styles.header_title_text_ios : 
                            styles.header_title_text_android}>MiCCU</Title>
                </Body>
                <Right>
                    {/* Render Nothing Here */}
                </Right>
            </Header>
        )
    }

    renderSectionListItems() {
        var sections = this.state.sections
        return sections.map((section) => {
            // Convert pageNumber to an integer
            var pageNumber = Number(section.pdfPageNumber)
            return (
                <SectionCard 
                    id={section.sectionNumber} 
                    title={section.sectionTitle} 
                    section={section.sectionNumber}
                    pdfPageNumber={pageNumber}
                    navigation={this.props.navigation}
                />
            )
        })
    }

    renderSectionList() {
        return (
            <List>
                {this.renderSectionListItems()}
            </List>
        )
    }

    render() {
        var isLoading = this.state.isLoading
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    {isLoading ? this.renderSpinner() : this.renderSectionList()}
                </Content>
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
    header_icons_ios: {
        color:colors.TOP_HEADER_ICONS_IOS,
    },
    header_icons_android: {
        color:colors.TOP_HEADER_ICONS_ANDROID,
    },
})