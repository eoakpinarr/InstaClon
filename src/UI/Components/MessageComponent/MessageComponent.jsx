import { View, Text, Image } from 'react-native'
import React from 'react'


const MessageComponent = () => {
    return (
        <View className="flex flex-row m-2 ml-4 mr-4 items-center justify-between">
            <Image width={48} height={48} className="rounded-xl"
                source={{ uri: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/380x253/8/4/1/85841_serotonin_shutterstock_92466964_300.jpg" }} />
            <View className="m-2">
                <Text className="font-semibold text-base text-[#0F1828]">Athalia Putri</Text>
                <Text className="text-sm text-[#ADB5BD]">Good Morning, did you sleep well?</Text>
            </View>
            <View className="m-2 items-end">
                <Text className="font-semibold text-[12px] text-[#0F1828]">3m ago</Text>
                <View className="rounded-full bg-red-500 p-0.5">
                    <Text className="text-[9px] text-[#ADB5BD]">12</Text>
                </View>
            </View>
            
        </View>
    )
}

export default MessageComponent