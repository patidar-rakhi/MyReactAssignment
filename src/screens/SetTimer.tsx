


import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

let myTimer: NodeJS.Timeout | null = null;

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    if (isTimerOn) {
      myTimer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (myTimer) {
        clearInterval(myTimer);
        myTimer = null;
        setSeconds(0); 
      }
    }

    return () => {
      if (myTimer) {
        clearInterval(myTimer);
        myTimer = null;
      }
    };
  }, [isTimerOn]);

  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <Text style={{ fontSize: 25}}>{seconds} sec</Text>
        <Button
          title={isTimerOn ? 'Stop Timer' : 'Start Timer'}
          onPress={() => setIsTimerOn(prev => !prev)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Timer;



