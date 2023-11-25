import PromiseListItem from "@/components/Promises/PromiseListItem";
import useGetDate from "@/libs/hooks/useGetDate";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const Promises = () => {
  const { getFormattedDate } = useGetDate()
  const [today, _] = useState(getFormattedDate(new Date()))

  // 오늘 => selected, 약속이 있었던 날 => marked
  const markedDates = {
    [today]: { selected: true, dotColor: '0075FF' },
    '2023-11-20': { marked: true, dotColor: '0075FF' },
    '2023-11-05': { marked: true, dotColor: '0075FF' },
  }
    
  return (
    <View>
      <Calendar style={styles.calendar} markedDates={markedDates} />
      <PromiseListItem />
    </View>
  )
}

const styles = StyleSheet.create({
  calendar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 67,
    marginBottom: 15,
    width: 331,
    height: 332,
  }
});

export default Promises