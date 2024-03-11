import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image, Pressable, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

export const EditProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <AntDesign name="arrowleft" size={25} color={'#E9D160'} onPress={() => navigation.navigate('HomeScreen')} />
                    <Text style={styles.headerText}>Edit Profile</Text>
                </View>
            </View>

            <ScrollView>
                <View style={styles.content}>

                    <View style={styles.avatarSection}>
                        <Image source={require('../image/female.jpg')} style={styles.avatar} />
                        <TouchableOpacity style={styles.changeAvatarButton}>
                            <Feather name="edit" color={'#B9992D'} size={20} />
                            <Text style={styles.changeAvatarText}>Change Avatar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.spacer}></View>

                    <Pressable style={styles.saveChangesButton}>
                        <Text style={styles.saveChangesText}>Save Changes</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: '#25272A',
    },
    header: {
        zIndex: 1,
        paddingTop: 50,
        backgroundColor: '#202123',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15, // Replaced gap with marginLeft for compatibility
    },
    content: {
        backgroundColor: '#25272A',
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 25,
    },
    avatarSection: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10, // Replaced gap with marginBottom for compatibility
    },
    avatar: {
        width: '25%',
        height: 90,
        borderRadius: 50,
    },
    changeAvatarButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#55575A',
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 5,
        marginTop: 5, // Added for spacing between avatar and button
    },
    changeAvatarText: {
        fontSize: 13,
        color: '#C1C2C2',
        marginLeft: 5, // Replaced gap with marginLeft for compatibility
    },
    spacer: {
        height: 165,
    },
    saveChangesButton: {
        width: '100%',
        backgroundColor: '#FFD130',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    saveChangesText: {
        color: 'black',
        textAlign: 'center',
    },
});
