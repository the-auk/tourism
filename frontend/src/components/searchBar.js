import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // You can use any icon library you prefer
import { other, primary, secondary, grays } from '../styles/Colors';
import { horizontalScale, verticalScale, moderateScale } from '../styles/Metric';
import { h4 } from "../styles/Typography";
import Trie from '../utils/trie';
import { useNavigation } from '@react-navigation/native';

const trie = new Trie();

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchRes, setSearchRes] = useState([]);
  const [datatArr, setDataArr] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const {data} = props;
    setDataArr(data);
    if(data && data.length > 0){
      data.forEach(ele => {
        const name = (ele.tour_title).trim().toLowerCase();
        trie.insert(name);
      });
    }
  }, [props])

  useEffect(() => {
    if(searchText.length > 0){
      let temp = [];
      const t = trie.find(searchText.toLowerCase().trim());
      for(let i = 0; i < t.length; i++){
        temp.push(
          <TouchableOpacity
          style={{
            borderBottomWidth: moderateScale(0.75),
            borderColor: grays.fW,
            width: "100%",
            padding: 20,
          }}
          key={i}
          onPress={() => {
            datatArr.forEach(ele => {
              if(ele.tour_title.toLowerCase() === t[i]){
                navigation.navigate("tourPreview", {
                  item: ele
                });
              }
            })
          }}
        >
          <Text style={{
                fontFamily: h4.family,
                fontSize: h4.size,
                fontWeight: h4.weight,
                lineHeight: h4.size,
          }}>{t[i]}</Text>
        </TouchableOpacity>
        );
      }
      setSearchRes(temp);
    }
    else{
      setSearchRes([]);
    }
  }, [searchText])

  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Find places..."
        value={searchText}
        onChangeText={setSearchText}
      />
      {searchRes.length > 0 && <View style={styles.searchResCont}>
        {searchRes}
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    borderWidth: 0.3,
    borderColor: primary.mB,
    marginBottom: 20
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  searchResCont: {
    height: verticalScale(800),
    width: horizontalScale(400),
    backgroundColor: primary.wS,
    position: 'absolute',
    top: 40,
    right: -20,
    zIndex: 999,
    paddingHorizontal: 30
  }
});

export default SearchBar;