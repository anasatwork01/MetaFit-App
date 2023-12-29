import {
  View,
  FlatList,
  StyleSheet,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import { useState } from "react";
import { ms } from "react-native-size-matters";
import Comment from "./Comment";
import { AppText } from "../../../components/UI/AppText";
import Theme from "../../../res/Theme";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import ImageViewer from "../../../components/UI/ImageViewer";
import { useSelector } from "react-redux";
import Images from "../../../res/Images";
// import { _handleOnComment } from "../../Helpers/postApi";

const CommentsScreen = ({ navigation, route }) => {
  //   const { post_id, comments: initialComments } = route.params;
  const [commentText, setCommentText] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [sendBtnDisabled, setSendBtnDisabled] = useState(false);
  const [comments, setComments] = useState([{}, {}, {}]);
  const { user } = useSelector((state) => state.auth);

  const commentCallback = (type, id) => {};

  const _renderComment = ({ item }) => {
    return <Comment comment={item} commentCallback={commentCallback} />;
  };

  const _renderEmptyComponent = () => {
    return (
      <>
        <FontAwesome5
          name="comment-slash"
          size={30}
          color={Theme.light.text}
          style={{ alignSelf: "center", marginTop: ms(20) }}
        />
        <AppText
          text="Be the first to Comment"
          fontSize={ms(16)}
          fontWeight={"semiBold"}
          color={Theme.light.text}
          center={true}
          styles={{ paddingVertical: ms(20) }}
        />
      </>
    );
  };

  const _sendComment = async () => {
    try {
      setSendBtnDisabled(true);
      let body = {
        post_id,
        comment: commentText,
      };
      console.log("body", body);
      const res = await _handleOnComment(body);
      if (res?.data?.message === "Comment added successfully") {
        setComments((prev) => [...prev, res?.data?.data]);
      }
      setCommentText("");
      setSendBtnDisabled(false);
    } catch (error) {
      setSendBtnDisabled(false);
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      style={{ flex: 1, backgroundColor: Theme.light.white }}
    >
      <FlatList
        data={comments}
        renderItem={_renderComment}
        ListEmptyComponent={_renderEmptyComponent}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{
          paddingVertical: ms(20),
          paddingHorizontal: ms(20),
          backgroundColor: Theme.light.white,
          flex: 1,
        }}
      />
      <View style={[styles.bottomView, { backgroundColor: Theme.light.white }]}>
        <View style={styles.inputView}>
          <ImageViewer
            image={user?.avatar ? { uri: user?.avatar } : Images.userImg}
            style={styles.avatar}
            resizeMode="contain"
          />
          <View style={styles.flexView}>
            <TextInput
              style={{
                height: ms(30),
                flex: 1,
              }}
              placeholder="Your comment..."
              placeholderTextColor={Theme.light.text}
              onChangeText={setCommentText}
              value={commentText}
            />
            {commentText?.length > 0 || selectedMedia ? (
              <Pressable
                onPress={_sendComment}
                style={[
                  sendBtnDisabled ? { opacity: 0.5 } : { opacity: 1 },
                  { backgroundColor: Theme.light.primary },
                  styles.sendBtn,
                ]}
                disabled={sendBtnDisabled}
              >
                <Ionicons name="send" size={16} color={Theme.light.white} />
              </Pressable>
            ) : null}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  createComment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: ms(10),
    paddingHorizontal: ms(20),
    borderTopLeftRadius: ms(20),
    borderTopRightRadius: ms(20),
  },
  avatar: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(20),
    borderWidth: 1,
    borderColor: Theme.light.border,
  },
  bottomView: {
    width: "100%",
    borderWidth: 0.5,
    borderTopEndRadius: ms(20),
    borderTopStartRadius: ms(20),
    borderColor: Theme.light.border,
    position: Platform.OS === "android" ? "absolute" : "relative",
    bottom: ms(0),
    padding: ms(20),
  },
  sendBtn: {
    width: ms(30),
    height: ms(30),
    borderRadius: ms(20),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flexView: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ms(5),
    paddingLeft: ms(15),
    marginHorizontal: ms(10),
    borderRadius: ms(30),
    backgroundColor: Theme.light.light200,
  },
  mediaBtn: {
    width: ms(30),
    height: ms(30),
    borderRadius: ms(20),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Theme.light.lightGray,
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customStyle: {
    width: ms(60),
    height: ms(60),
    borderRadius: ms(10),
    marginRight: ms(10),
  },
  customIconStyle: {
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: ms(60),
    height: ms(60),
  },
  header: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Theme.light.border,
    paddingBottom: ms(10),
    marginHorizontal: ms(20),
  },
  headerText: {
    flex: 1,
    alignSelf: "center",
    marginRight: -ms(20),
  },
});
