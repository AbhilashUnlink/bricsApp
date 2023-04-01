import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import aspectRatio from "../config/aspect-ratios";
import color from "../config/color";
import useEngaged from "../hooks/engagement";
import EngagementButton from "./buttons/EngagementButton";

const EngagementButtonComponent = ({ post }) => {
  const [engagedLike, likeCount, handleLikeEngaged] = useEngaged(
    post.likeCount
  );
  // const [engagedFollow, followCount, handleFollowEngaged] = useEngaged(
  //   post.followCount
  // );

  return (
    <View style={styles.postView}>
      <EngagementButton
        icon="thumbs-o-up"
        count={likeCount}
        engaged={engagedLike}
        engagedColor={color.bannerBackground}
        size={36}
        onClick={handleLikeEngaged}
        style={{ position: "absolute", right: 0, top: 0 }}
      />
      {/* <EngagementButton icon="square" count={post.user} /> */}
      {/* <EngagementButton
        icon="star"
        count={followCount}
        engaged={engagedFollow}
        engagedColor={color.golden}
        size={36}
        onClick={handleFollowEngaged}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  postView: {
    width: aspectRatio.fullwidth,
    borderBottomEndRadius: 10,
  },
});

export default EngagementButtonComponent;
