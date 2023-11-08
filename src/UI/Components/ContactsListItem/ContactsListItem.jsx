import { View, Text, Image } from 'react-native'
import React from 'react'

const ContactsListItem = () => {
    return (
        <View>
            <View className="flex flex-row m-2 ml-6 mr-6 items-start bg-[#fff] p-0.5 pt-0 pb-0">
                <Image width={48} height={48} className="rounded-md"
                    source={{ uri: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/380x253/8/4/1/85841_serotonin_shutterstock_92466964_300.jpg" }} />
                <View className="m-2 ml-3">
                    <Text className="font-semibold text-base text-[#0F1828]">Athalia Putri</Text>
                    <Text className="text-sm text-[#ADB5BD]">Good Morning, did you sleep well?</Text>
                </View>
            </View>
            <View className="m-6 mt-0 mb-0 border border-b border-[#ededed]">
            </View>
        </View>

    )
}

export default ContactsListItem