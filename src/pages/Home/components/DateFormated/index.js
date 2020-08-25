import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function DateFormated({data}) {
  const dataFormated = useMemo(
    () => format(new Date(data), 'yyyy/MM/dd', {locale: pt}),
    [data],
  );

  console.log("DATA", dataFormated)

  return (
    <View>
      <Text style={styles.dateText}>33/02/1198</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dateText: {
    fontSize: 12,
    marginLeft: 5,
    color: '#ccc',
    fontWeight: '800',
  },
});
