import React from "react";
import { SectionList, Text, View, StyleSheet, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
    row:{
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    name: {
        fontSize: 16,
    },
    separator: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 1,
    },
    sectionHeader: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "rgba(170, 170, 170)",
    },
});

const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator, item) => {
        const group = item.name.last[0].toUpperCase();

        if(accumulator[group]){
            accumulator[group].data.push(item);
        } else {
            accumulator[group] = {
                title: group,
                data: [item],
            };
        }
        return accumulator;
    }, {});

    const sections =  Object.keys(groupedData).map((key) => {
        return groupedData[key];
    });
    
    return sections.sort((a,b) => {
        if(a.title > b.title){
            return 1;
        }
        return -1;
    });
};

const c8 = () => {
    return(
        <SafeAreaView>
            <SectionList
                sections={groupPeopleByLastName(PEOPLE)}
                keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
                renderSectionHeader={({section}) =>{
                    return(
                        <View style={styles.sectionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    );
                }}
                renderItem={({item}) => {
                    return(
                        <View style={styles.row}>
                            <Text style={styles.name}>
                                {item.name.title} {item.name.first} {item.name.last}
                            </Text>
                        </View>
                    );
                }}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
            />
        </SafeAreaView>
    );
};

export default c8;

const PEOPLE = [
    {
        name: {
            title: "ST",
            first: "",
            last: "Pelé",
        },
    },
    {
        name: {
            title: "ST",
            first: "De Lima",
            last: "Ronaldo",
        },
    },
    {
        name: {
            title: "CAM",
            first: "",
            last: "Ronaldinho",
        },
    },
    {
        name: {
            title: "CAM",
            first: "Vítor Borba Ferreira",
            last: "Rivaldo",
        },
    },
    {
        name: {
            title: "RB",
            first: "Marcos",
            last: "Cafu",
        },
    },
    {
        name: {
            title: "LB",
            first: "da Silva",
            last: "Roberto Carlos",
        },
    },
];
