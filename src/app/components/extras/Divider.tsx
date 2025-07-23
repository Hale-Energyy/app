import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = ({ className }: { className?: string }) => (
  <View style={styles.divider} className={className} />
);

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',

    marginVertical: 8,
  },
});

export default Divider;
