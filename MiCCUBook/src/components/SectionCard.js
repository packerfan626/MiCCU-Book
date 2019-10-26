import React from 'react';
import { 
    Body,
    Text,
    Card,
    CardItem,
    Content,
} from 'native-base';
import { 
    StyleSheet,
    TouchableOpacity 
} from 'react-native';
import colors from '@assets/colors';

export default class SectionCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardColor: '',
        }
    }

    componentDidMount() {
        let id = this.props.id
        let isOdd = this.isOdd(id)
        let cardColor = (isOdd ? colors.MICHIGAN_YELLOW : colors.MICHIGAN_BLUE)

        this.setState({
            cardColor: cardColor
        })
    }

    isOdd = (num) => {
        return num % 2
    }

    onCardPressed = () => {
        this.props.navigation.navigate('PDF', {
            title: this.props.title,
            pdfPageNumber: this.props.pdfPageNumber,
        });
    }

    render() {
        return (
          <Content>
              <TouchableOpacity onPress={() => this.onCardPressed()}>
                <Card style={{backgroundColor:this.state.cardColor, marginRight: 8, marginLeft: 8}}>
                    <CardItem style={{backgroundColor:this.state.cardColor}}>
                        <Body>
                            <Text style={styles.section_title_text}>
                                {this.props.title}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{backgroundColor:this.state.cardColor}}>
                        <Text style={styles.section_text}>
                            Section {this.props.section}
                        </Text>
                    </CardItem>
                </Card>
              </TouchableOpacity>
          </Content>
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
    section_title_text: {
        color: colors.WHITE_CARD_TEXT,
        fontSize: 20,
    },
    section_text: {
        color: colors.WHITE_CARD_TEXT,
        fontSize: 12,
    }
})