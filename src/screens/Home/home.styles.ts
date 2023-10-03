import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenView: {
    flex: 1,
  },
  tabSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: '#888',
    borderWidth: 1,
  },
  selectedTab: {
    backgroundColor: '#aaa',
  },
  itemText: {
    fontSize: 16,
  },
});

export default styles;
