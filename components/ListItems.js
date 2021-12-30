import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItems = ({amount , Desc , category}) => {
    return (
        <View>
            <Text>
            {amount}
            {Desc}
            {category}
          </Text>
        </View>
    )
}

export default ListItems

const styles = StyleSheet.create({})
