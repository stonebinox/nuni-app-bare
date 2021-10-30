import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const BASE_SPACING = 16;
export const HALF_SPACING = BASE_SPACING / 2;
export const QUARTER_SPACING = HALF_SPACING / 2;
export const DOUBLE_SPACING = BASE_SPACING * 2;

export const colors = {
  aqua: '#00d8be',
  white: '#fff',
  lightestGrey: '#efefef',
  lightGrey: '#ccc',
  grey3: '#333',
  grey6: '#666',
};

export const Container = styled(SafeAreaView)`
  width: 100%;
  background-color: ${colors.white};
  height: 100%;
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  padding: ${BASE_SPACING}px;
`;

export const Heading = styled.Text`
  font-size: 28px;
  color: ${colors.grey6};
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: ${DOUBLE_SPACING + BASE_SPACING * 1.5}px;
`;

export const SmallHeading = styled.Text`
  font-size: 15px;
  color: ${colors.grey6};
  text-align: center;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border: 2px solid ${colors.lightGrey};
  border-radius: ${DOUBLE_SPACING}px;
  width: 90%;
  padding: ${HALF_SPACING}px ${BASE_SPACING}px;
  font-size: ${BASE_SPACING}px;
  color: ${colors.grey3};
  height: 50px;
  margin: 0 auto;
  margin-bottom: ${BASE_SPACING}px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  width: 90%;
  background-color: ${colors.aqua};
  border-radius: 40px;
  padding: ${HALF_SPACING}px;
  margin: 0 auto;
  border-width: 0;
  margin-top: ${BASE_SPACING}px;
  height: 50px;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${colors.white};
  border: 2px solid ${colors.aqua};
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-top: ${QUARTER_SPACING / 2}px;
`;

export const SecondaryButtonText = styled(ButtonText)`
  color: ${colors.aqua};
`;

export const Ball = styled.View`
  width: 400px;
  height: 400px;
  border-radius: 200px;
  background-color: ${colors.aqua};
  position: absolute;
`;
