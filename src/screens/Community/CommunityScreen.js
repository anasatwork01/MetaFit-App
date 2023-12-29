import { RefreshControl, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import Theme from "../../res/Theme";
import Post from "../../components/Post/Post";
import { AppText } from "../../components/UI/AppText";
import { ms } from "react-native-size-matters";
import { ShadowCard } from "../../components/UI/ShadowCard";
import { POST_CALLBACK_TYPE, POST_MEDIA_TYPE } from "../../constants/constants";
import AppButton from "../../components/UI/AppButton";

const PostData = [
  {
    _id: "1",
    content: "Hello This is my first testing Post",
    user_info: {
      name: "Anas",
    },
    media: {
      type: POST_MEDIA_TYPE.IMAGE,
      url: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais",
    },
  },
  {
    _id: "2",
    content: "Hello This is my Second testing Post",
    user_info: {
      name: "Hassan",
    },
    media: {
      type: POST_MEDIA_TYPE.IMAGE,
      url: "https://img.freepik.com/free-photo/misurina-sunset_181624-34793.jpg?w=740&t=st=1703806364~exp=1703806964~hmac=15503451b28f19d8d611ad23febf4a15f7e02409f144b4197a5939eec70a10d9",
    },
  },
];

const CommunityScreen = ({ navigation }) => {
  const [post, setPost] = useState(PostData);
  const [loaded, setLoaded] = useState(false);

  const _renderPosts = ({ item, index }) => {
    return <Post item={item} postCallback={postCallback} post_index={index} />;
  };

  const _renderHeader = () => {
    return (
      <View style={{ marginBottom: ms(20) }}>
        <ShadowCard borderRadius={ms(10)}>
          <View style={styles.flexView}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
                padding: ms(20),
              }}
            >
              <AppText
                color={Theme.light.dark}
                fontSize={ms(15)}
                text="Create a new Post"
              />
              <AppButton
                title="Add"
                height={ms(25)}
                width={ms(100)}
                onPress={() => navigation.navigate("New Post")}
              />
            </View>
          </View>
        </ShadowCard>
      </View>
    );
  };

  const _onEndReached = useCallback(async () => {
    if (loaded) return;
  });

  const _refresh = useCallback(() => {
    setLoaded(false);
    setPost(PostData);
  });

  const postCallback = async (type, data) => {
    switch (type) {
      case POST_CALLBACK_TYPE.LIKE:
        return await _handleOnLike(data);
      case POST_CALLBACK_TYPE.COMMENT:
        navigateToComments(data);
        break;
      default:
        break;
    }
  };

  const _handleOnLike = (data) => {};

  const navigateToComments = (data) => {
    navigation.navigate("Comments");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainerStyle}>
        <FlatList
          data={post}
          renderItem={_renderPosts}
          ListHeaderComponent={_renderHeader()}
          keyExtractor={(item) => item._id}
          onEndReached={_onEndReached}
          initialNumToRender={6}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{
            paddingBottom: ms(110),
            paddingHorizontal: ms(20),
            paddingTop: ms(10),
          }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={_refresh}
              colors={[Theme.light.dark100]}
              progressBackgroundColor={Theme.light.white}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CommunityScreen;
