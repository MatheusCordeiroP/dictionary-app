import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcc',
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
    paddingVertical: 10, // Adjust the padding as needed
    backgroundColor: 'white', // Background color for unselected tabs
    borderColor: '#888',
    borderWidth: 1,
  },
  selectedTab: {
    backgroundColor: '#aaa', // Background color for the selected tab
  },
  findWordTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffc',
  },
  findWordInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#ccf',
    borderRadius: 5, // Optional: Add rounded corners to the TextInput
  },
  findWordButton: {
    backgroundColor: '#cff',
    padding: 10,
    borderRadius: 5, // Optional: Add rounded corners to the button
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: '5%',
    backgroundColor: '#cfc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default styles;
