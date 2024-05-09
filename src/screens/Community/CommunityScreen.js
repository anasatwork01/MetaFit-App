import { FlatList, RefreshControl, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Theme from "../../res/Theme";
import Post from "../../components/Post/Post";
import { AppText } from "../../components/UI/AppText";
import { ms } from "react-native-size-matters";
import { ShadowCard } from "../../components/UI/ShadowCard";
import { POST_CALLBACK_TYPE, POST_MEDIA_TYPE } from "../../constants/constants";
import AppButton from "../../components/UI/AppButton";
import g1 from "../../../assets/images/g1.jpg";
import g2 from "../../../assets/images/g2.jpg";

const PostData = [
  {
    _id: "0",
    content: "I am looking for a gym",
    user_info: {
      name: "Anas",
    },
  },
  {
    _id: "1",
    content: "Happy to share I did my pr bicep curl today",
    user_info: {
      name: "Anas",
    },
    media: {
      type: POST_MEDIA_TYPE.IMAGE,
      url: g1,
    },
  },
  {
    _id: "2",
    content: "Dtarting doing Yoga",
    user_info: {
      name: "Maria",
    },
    media: {
      type: POST_MEDIA_TYPE.IMAGE,
      url: g2,
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
