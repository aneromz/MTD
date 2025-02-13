import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SectionList,
  ImageBackground
} from 'react-native';

// Import stylesheet
import omStyles from './omStyle.js';

// Import contact info
var dataJson = require('./kontakt.json');

export default class OmScreen extends Component {
    constructor(props) {
      super(props);
      // Get images
      img_header=require('Test1/img/om/MTD_2019_logga.png')
    }

    // Set navigation options
    static navigationOptions = {
      title: 'Om',
    };

    // Create a seperator for the SectionList
    renderSeparator = () => {
     return (
         <View
           style={{
             height: 2, // Mellanrum mellan kontaktpersonerna
             backgroundColor: "grey", // Färger mellan kontaktpersonernas
           }}
         />
       );
     };

    render () {
      return (
            <View style={omStyles.omEntireView}>
              <SectionList // We want to disable scroll
              stickySectionHeadersEnabled = {false}
                style={{alignSelf: 'stretch'}}
                renderItem={({item}) => <OmRow itemOm={item} />}
                renderSectionHeader={({section}) => <SectionOmHeader title={section.title} /> }
                ItemSeparatorComponent={this.renderSeparator}
                sections={[ // homogeneous rendering between sections
                  {data: dataJson.MTDare, title: 'Kontakt'}
                ]}
                keyExtractor={item => item.name}
              />
            </View>
      );
    }
}

// Class to create and render section header
class SectionOmHeader extends Component {
  constructor(props) {
      super(props)
    sec_header=require('Test1/img/sectionB3.png')
  }

  render () {
    return (
      <View style={omStyles.omHeader}>
      <Image
        source={img_header}
        style={{alignSelf: 'center', height: 150, padding: 2}} // Style for header
        resizeMode="contain"
      />
      <View style={{padding: 12, paddingTop: 5}}>
        <Text style={omStyles.infoStyle}>
          Medieteknikdagarna är ett ideellt arrangemang drivet av och för studenter. 2019 går mässan av stapeln för nittonde gången.
          Syftet är att knyta kontakter mellan studenter, medietekniker ute i arbetslivet och företagen inom branschen!
        </Text>
      </View>

        <ImageBackground
            style={{flex: 1}}
            source={sec_header}
        >
          <Text style={{fontWeight: 'bold', color: 'white', margin: '1%'}}> {this.props.title} </Text>
        </ImageBackground>
      </View>
    );
  }
}

// Class to render one row of the table
class OmRow extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={omStyles.omView}>
          <Image source={{ uri: this.props.itemOm.image}} style={omStyles.omImage} />
          <View style={omStyles.omInfo}>
            <Text style={omStyles.omHeadline}>
              {this.props.itemOm.name}
            </Text>
            <Text style={omStyles.omText}>
              {this.props.itemOm.post}
            </Text>
            <Text style={omStyles.omText}>
              {this.props.itemOm.number}
            </Text>
            <Text style={omStyles.omText}>
              {this.props.itemOm.mail}
            </Text>
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
        </View>
      </View>
    );
  }
}
