import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingBottom: '40%',
  },
  content: {
    alignItems: 'center',
  },
  simpleText: {
    fontSize: 18,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  signOutButton: {
    backgroundColor: '#cd6155',
    padding: 10,
    borderRadius: 10,
  },
  signOutButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
