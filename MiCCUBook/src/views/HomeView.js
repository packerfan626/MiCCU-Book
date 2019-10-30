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
        // this.props.navigation.navigate('About');
        console.log('Download Button Pressed')
    }

    renderHeader() {
        return (
            <Header searchBar>
                <Left>
                    <Button transparent onPress={() => this.downloadButtonPressed()}>
                        { Platform.OS === 'ios' ? 
                            <Icon name='ios-download' style={styles.header_icons}/> : 
                            <Icon name='md-download' style={styles.header_icons}/> }  
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

    renderSectionList() {
        var sections = this.state.sections
        return sections.map((section) => {
            // Convert pageNumber to an integer
            var pageNumber = Number(section.pdfPageNumber)
            return(
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

    render() {
        var isLoading = this.state.isLoading
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <List>
                        {isLoading ? <View></View> : this.renderSectionList()}
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