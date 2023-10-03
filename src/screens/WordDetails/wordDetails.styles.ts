import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wordText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mainPhoneticText: {
    fontSize: 18,
    fontStyle: 'italic',
  },

  scrollView: {
    marginTop: 12,
    marginHorizontal: '5%',
  },

  phoneticsTitle: {
    fontSize: 20,
    marginTop: 16,
    fontWeight: 'bold',
  },
  phoneticsText: {
    fontSize: 16,
  },
  meaningsTitle: {
    fontSize: 20,
    marginTop: 16,
    fontWeight: 'bold',
  },
  meaningsComponentView: {
    marginBottom: 16,
  },
  meaningsComponentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  meaningsSubComponentView: {
    marginLeft: 16,
  },
  meaningsSubComponentText: {
    fontSize: 16,
  },
  meaningsSubComponentExample: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  licenseText: {
    fontSize: 14,
    marginTop: 24,
  },
  sourceTitle: {
    fontSize: 14,
    marginTop: 12,
  },
  sourceTouchableOpacity: {
    marginBottom: 8,
  },
  sourceText: {
    fontSize: 14,
    color: '#448',
  },
});

export default styles;
