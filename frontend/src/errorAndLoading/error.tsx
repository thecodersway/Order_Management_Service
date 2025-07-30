import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import ErrorIcon from '../assests/svg/error';
// import ErrorIcon from '../assests/svg/error';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'something went wrong' }) => {
  return (
    <View style={styles.container}>
        {/* {!message &&
        <View style={styles.icon}>
        <ErrorIcon />
        <Text>Some Thing Went Wrong</Text>
       </View>} */}
      <Text style={styles.text}>{message}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
   justifyContent:'center',
   alignItems:'center',
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
});

export default ErrorMessage;
