// Libraries
import { View, TouchableOpacity, Pressable } from "react-native";
import { ms } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
// Components
import {
  HeartIcon,
  HeartLightIcon,
  MoreIcon,
  CommnetIcon,
} from "../../res/Icons";
import { ShadowCard } from "../UI/ShadowCard";
import { AppText } from "../UI/AppText";
import { POST_CALLBACK_TYPE, POST_MEDIA_TYPE } from "../../constants/constants";
// Styles
import styles from "./styles";
import { useSelector } from "react-redux";
import AppImg from "../UI/AppImg";
import Images from "../../res/Images";
import Theme from "../../res/Theme";
// import ExpoVideo from "../ExpoVideo/ExpoVideo";
// import { Video } from "expo-av";
// import { reportUserRef } from "../ReportUser/ReportUser";
// import { postActionsRef } from "../PostActions/PostActions";
// import { PlayPostIcon } from "../ExpoVideo/ExpoVideo";

export default function Post({ post_index = 0, item, postCallback }) {
  const user = useSelector((state) => state.auth.user);
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (item?.likes?.includes(user?.sub)) {
      setIsLiked(true);
    }
  }, [item]);

  const _handleLike = async () => {
    const res = await postCallback(POST_CALLBACK_TYPE.LIKE, {
      post_id: item?._id,
    });
    if (!res.error) {
      if (res.res === "Post liked") setIsLiked(true);
      else setIsLiked(false);
    }
  };

  const _handleOnComment = async () => {
    // postCallback(POST_CALLBACK_TYPE.COMMENT, {
    //   post_id: item?._id,
    //   comments: item?.comments,
    // });
    postCallback(POST_CALLBACK_TYPE.COMMENT);
  };

  const profileHandler = () => {
    // postCallback(POST_CALLBACK_TYPE.USER_PROFILE, {
    //   user_id: item?.user,
    // });
    // if (item?.user === user?.sub) return navigation.navigate("Profile");
    // navigation.navigate("Explore", {
    //   screen: "User Profile",
    //   params: { user_id: item?.user },
    //   initial: false,
    // });
  };

  const _handleReportUser = () => {
    // if (item?.user === user?.sub) {
    //   postActionsRef.current?.openModal(item);
    //   return;
    // }
    // reportUserRef.current?.openModal({
    //   ...item?.user_info,
    //   user: item.user,
    //   post_id: item?._id,
    // });
  };

  return (
    <View style={{ flex: 1 }}>
      <ShadowCard
        paddingHorizontal={ms(15)}
        paddingVertical={ms(15)}
        borderRadius={ms(10)}
        marginBottom={ms(15)}
      >
        <View style={styles.postView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={profileHandler}>
              <View style={styles.postHeader}>
                <View style={styles.postUserImg}>
                  <AppImg
                    image={
                      item.user_info?.avatar
                        ? { uri: item?.user_info?.avatar }
                        : Images.userImg
                    }
                    width={ms(40)}
                    height={ms(40)}
                    resizeMode="cover"
                    borderRadius={ms(10)}
                    mainResizemode="cover"
                  />
                </View>
                <View style={styles.postMeta}>
                  <AppText
                    text={item?.user_info?.name}
                    fontSize={ms(14)}
                    fontFamily="Manrope-SemiBold"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.postDropdown}>
              <Pressable style={styles.moreBtn} onPress={_handleReportUser}>
                <MoreIcon
                  width={ms(16)}
                  height={ms(6)}
                  fill={Theme.light.dark}
                />
              </Pressable>
            </View>
          </View>
          {item?.content && (
            <AppText
              text={item?.content}
              fontSize={ms(12)}
              fontFamily="Manrope-Regular"
            />
          )}
          {item?.media && item?.media?.type === POST_MEDIA_TYPE.IMAGE && (
            <View style={styles.postImg}>
              <AppImg
                image={item?.media ? item?.media?.url : Images.postImg}
                width="100%"
                height={ms(248)}
                resizeMode="cover"
                borderRadius={ms(10)}
                mainResizemode="cover"
              />
            </View>
          )}
        </View>
        <View style={styles.postSocialIcons}>
          <TouchableOpacity
            style={{ marginRight: ms(15) }}
            activeOpacity={0.75}
            onPress={_handleLike}
          >
            {isLiked ? (
              <HeartIcon
                width={ms(22)}
                height={ms(22)}
                fill={Theme.light.dark}
                stroke={Theme.light.dark}
              />
            ) : (
              <HeartLightIcon
                width={ms(22)}
                height={ms(22)}
                stroke={Theme.light.dark}
                fill={Theme.light.dark}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: ms(15) }}
            activeOpacity={0.75}
            onPress={_handleOnComment}
          >
            <CommnetIcon
              width={ms(22)}
              height={ms(22)}
              stroke={Theme.light.dark}
            />
          </TouchableOpacity>
        </View>
      </ShadowCard>
    </View>
  );
}
