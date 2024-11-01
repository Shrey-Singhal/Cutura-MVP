// src/app/tabs/studio.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheetComponent from '@/src/components/bottomSheetComponent';

const Studio = () => {
  return (
    <View style={styles.container}>
      <BottomSheetComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Studio;
