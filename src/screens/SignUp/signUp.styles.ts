import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ddd',
    paddingBottom: '24%',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 40,
  },
  textInput: {
    marginHorizontal: 'auto',
    backgroundColor: '#eee',
    height: 40,
    borderRadius: 8,
    marginVertical: 6,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    marginTop: 24,
  },
  buttonStyle: {
    marginHorizontal: 'auto',
    height: 32,
    borderRadius: 8,
    marginVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  buttonText: {
    marginHorizontal: 'auto',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
  },
});

export default styles;
