import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors';

interface ChatItemProps {
  title: string;
  message?: string;
  time?: string;
  avatar?: any;
  isSpecial?: boolean;
  icon?: string;
  iconType?: string;
  isPinned?: boolean;
  isDraft?: boolean;
  numberOfMessage?: number;
  isUnRead?: boolean;
  isMuted?: boolean;
}

export default function ChatItem({
  title,
  message,
  time,
  avatar,
  isSpecial,
  icon,
  iconType,
  isPinned,
  isDraft,
  numberOfMessage,
  isUnRead,
  isMuted,
}: ChatItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {isSpecial ? (
          <View style={styles.specialIcon}>
            <MaterialIcons name={icon} size={24} color="#8696A0" />
          </View>
        ) : avatar ? (
          <Image source={avatar} style={styles.avatar} />
        ) : (
          <View style={styles.defaultAvatar}>
            <MaterialIcons name="group" size={24} color="#8696A0" />
          </View>
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        {message && (
          <View style={styles.messageRow}>
            <Text
              style={[styles.message, isDraft && styles.draftMessage]}
              numberOfLines={1}
            >
              {message}
            </Text>
            {isPinned && (
              <MaterialIcons
                name="push-pin"
                size={16}
                color="#8696A0"
                style={styles.pin}
              />
            )}
            {isMuted && (
              <MaterialIcons
                name="notifications-off"
                size={16}
                color="#8696A0"
                style={styles.pin}
              />
            )}

            {isUnRead && (
              <View style={styles.numberOfMessageContainer}>
                <Text style={styles.numberOfMessage}>{numberOfMessage}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 14,
  },
  avatarContainer: {
    marginRight: 14,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  defaultAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#202C33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  specialIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#202C33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    color: '#E9EDEF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: '#8696A0',
    fontSize: 12,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    color: '#8696A0',
    fontSize: 14,
    flex: 1,
  },
  numberOfMessageContainer: {
    width: 20,
    height: 20,
    backgroundColor: '#25D366',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberOfMessage: {
    color: colors.primary,
    fontSize: 12,
    textAlign: 'center',
  },

  draftMessage: {
    color: '#25D366',
  },
  pin: {
    marginLeft: 4,
  },
});

// import {
//   Animated,
//   GestureResponderEvent,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { ReactNode } from 'react';
// import AppText from './AppText';
// import colors from '../config/colors';
// import {
//   GestureHandlerRootView,
//   Swipeable,
// } from 'react-native-gesture-handler';

// interface Props {
//   image?: number;
//   ImageComponent?: ReactNode;
//   title: string;
//   subtitle?: string;
//   onPress?: (event: GestureResponderEvent) => void;
//   renderRightActions?: (
//     progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
//     dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
//     swipeable: Swipeable
//   ) => React.ReactNode;
// }

// export default function ListItem({
//   image,
//   ImageComponent,
//   title,
//   subtitle,
//   onPress,
//   renderRightActions,
// }: Props) {
//   return (
//     <Swipeable renderRightActions={renderRightActions}>
//       <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
//         <View style={styles.container}>
//           {ImageComponent}
//           {image && <Image style={styles.image} source={image} />}
//           <View style={styles.detailsContainer}>
//             <AppText style={styles.title}>{title}</AppText>
//             {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
//           </View>
//         </View>
//       </TouchableHighlight>
//     </Swipeable>
//   );
// }

// const styles = StyleSheet.create({
//   root: {},
//   container: {
//     flexDirection: 'row',
//     padding: 10,
//     // backgroundColor: colors.primary,
//   },
//   detailsContainer: {
//     marginLeft: 10,
//     justifyContent: 'center',
//   },
//   image: {
//     width: 60,
//     height: 60,
//     borderRadius: 35,
//   },
//   title: {
//     fontWeight: '500',
//     fontSize: 15,
//     paddingVertical: 8,
//   },
//   subtitle: {
//     color: colors.tertiare,
//     fontSize: 14,
//     paddingTop: 0,
//   },
// });
