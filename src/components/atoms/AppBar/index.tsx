import ArrowDirection from '@/assets/arrowDirection';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface AppBarProps {
  label: string;
  onClick?: () => void;
}

const AppBar = ({ label, onClick }: AppBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} style={styles.icon}>
        <ArrowDirection />
      </TouchableOpacity>

      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 32,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
});
export default AppBar;
