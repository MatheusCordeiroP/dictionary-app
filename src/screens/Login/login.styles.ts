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
  },
  subtitle: {
    marginTop: 14,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 28,
  },
  textInput: {
    marginHorizontal: 'auto',
    backgroundColor: '#eee',
    height: 40,
    borderRadius: 8,
    marginVertical: 6,
    paddingHorizontal: 12,
  },
  clearFieldsContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  clearFieldsText: {
    alignItems: 'flex-end',
    paddingVertical: 4,
    paddingHorizontal: 4,
    color: '#444',
    fontWeight: '500',
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
