import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"

const StoryContainerComponent = () => {
    return (
        <ScrollView className="flex flex-row gap-x-2.5 p-2 bg-[#F7F7FC]">
            <View className="flex flex-row">
                <View>
                    <View className="p-2 m-2 h-[76px] w-[56px] border-l-2 border-[#d0d0d0] items-center
                    border-r-2 border-b-2 border-t-2 rounded-lg justify-center">
                        <Feather name="plus" size={25} color="#d0d0d0"/>
                    </View>
                    <Text className="text-[9px] text-center">Pin Favorite</Text>
                </View>

                <View>
                    <View className="p-2 m-2 h-[76px] w-[56px] border-l-2 border-[#d0d0d0] items-center
                    border-r-2 border-b-2 border-t-2 rounded-xl justify-center">
                        <Image width={56} height={76} className="rounded-xl"
                        source={{ uri: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/380x253/8/4/1/85841_serotonin_shutterstock_92466964_300.jpg" }} />
                    </View>
                    <Text className="text-[9px] text-center">Midala</Text>
                </View>

                <View>
                    <View className="p-2 m-2 h-[76px] w-[56px] border-l-2 border-[#d0d0d0] items-center
                    border-r-2 border-b-2 border-t-2 rounded-xl justify-center">
                        <Image width={56} height={76} className="rounded-xl"
                        source={{ uri: "https://www.technopat.net/sosyal/eklenti/1673800012946-png.1634062/" }} />
                    </View>
                    <Text className="text-[9px] text-center">Salsabila</Text>
                </View>
                <View>
                    <View className="p-2 m-2 h-[76px] w-[56px] border-l-2 border-[#d0d0d0] items-center
                    border-r-2 border-b-2 border-t-2 rounded-xl justify-center">
                        <Image width={56} height={76} className="rounded-xl"
                        source={{ uri: "https://ideacdn.net/shop/mr/95/myassets/products/881/dijital-vitrin-erkek-63.jpg?revision=1697143329" }} />
                    </View>
                    <Text className="text-[9px] text-center">Salsabila</Text>
                </View>
                <View>
                    <View className="p-2 m-2 h-[76px] w-[56px] border-l-2 border-[#d0d0d0] items-center
                    border-r-2 border-b-2 border-t-2 rounded-xl justify-center">
                        <Image width={56} height={76} className="rounded-xl"
                        source={{ uri: "https://img-s1.onedio.com/id-553a052be8f9f41c2dbb0d5e/rev-0/w-600/h-399/f-jpg/s-843cc34ab08476081bbc64b93716853e8814a9a9.jpg" }} />
                    </View>
                    <Text className="text-[9px] text-center">Salsabila</Text>
                </View>
                <View>
                    <View className="p-2 m-2 h-[76px] w-[56px] border-l-2 border-[#d0d0d0] items-center
                    border-r-2 border-b-2 border-t-2 rounded-xl justify-center">
                        <Image width={56} height={76} className="rounded-xl"
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPBkR9Z0yUHa87Z6aVDR-8LmH7P7AIYtY9w&usqp=CAU" }} />
                    </View>
                    <Text className="text-[9px] text-center">Salsabila</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default StoryContainerComponent