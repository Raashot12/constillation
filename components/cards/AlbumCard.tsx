import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  name: string;
  image: string;
  title: string;
  artist: string;
};

const AlbumCard = ({ artist, image, name, title }: Props) => {
  return (
    <View className="pb-3 px-3">
      <Image
        source={{
          uri: image,
        }}
        className="w-[165px] h-[165px] bg-black"
      />
      <View className="flex-row items-center space-x-2">
        <Text className="text-[14px] font-bold text-[#fff]">1</Text>
        <View>
          <Text className="text-[14px] font-bold text-[#fff]">Timeless</Text>
          <Text className="text-[10px] font-bold text-[#fff]">Davido</Text>
        </View>
      </View>
    </View>
  );
};

export default AlbumCard;
