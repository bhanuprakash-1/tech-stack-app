import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback , View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component{
    renderDescription(){
        const { library , selectedLibraryId } = this.props ;

        if(library.item.id === selectedLibraryId){
            return(
            <Text>{  library.item.description }</Text>
            );
        }
    }



    render(){
        const { titleStyle } = styles ;
        const { id , title } = this.props.library.item

       // {console.log(this.props.library.item.title )}
    //    console.log(this.props) 
        
        
        return( 
            <TouchableWithoutFeedback
                onPress = { ()=> this.props.selectLibrary(id) } 
            >
                <View>
                    <CardSection >
                        <Text style = {titleStyle } >
                            {this.props.library.item.title }
                        </Text> 
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
        
    }

};

const styles = {
    titleStyle : {
        fontSize : 18,
        paddingLeft : 15
    }
}

const mapStateToProps = state => {

    return  {selectedLibraryId : state.selectedLibraryId };
}

export default connect(mapStateToProps, actions)(ListItem) ;