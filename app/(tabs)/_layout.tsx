import { Tabs } from 'expo-router';
import React from 'react';
import Icon from '../components/Icon';
import colors from '../config/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: colors.secondary,
          height: 85,
          justifyContent: 'space-between',
          alignContent: 'center',
          // color={isActive ? '#00A884' : '#8696A0'}
          // paddingLeft: 2,
        },
        tabBarLabelStyle: {
          color: colors.white,
          fontWeight: 'bold',
          paddingTop: 10,
          fontSize: 13,
          justifyContent: 'center',
          alignContent: 'space-between',
        },
        tabBarActiveTintColor: colors.primary, // WhatsApp green or your preferred color
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: () => (
            <Icon
              name="message-text-outline"
              size={50}
              iconName="Chats"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 35,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: 'Calls',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="phone"
              size={50}
              iconName="Calls"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 35,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="updates"
        options={{
          title: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="repeat-outline"
              size={50}
              iconName="Updates"
              iconType="material-community"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 35,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tools"
        options={{
          title: 'Tools',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="cart-outline"
              size={50}
              iconName="Tools"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 30,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
