import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  findWordTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: '5%',
    marginBottom: 10,
  },
  findWordInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  findWordButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: '5%',
  },
});

export default styles;
