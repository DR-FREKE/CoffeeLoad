import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Layout, TopNavigation} from '@ui-kitten/components';
import PropTypes from 'prop-types';

const AppLayout = ({children, ...props}) => (
  <Layout style={styles.scafold}>
    <SafeAreaView>
      {props.showTopNav && (
        <TopNavigation
          title={props.title}
          subtitle={props.subtitle}
          alignment={props.alignment}
          accessoryLeft={props.accessoryLeft}
          accessoryRight={props.accessoryRight}
          style={[
            styles.topNav,
            {backgroundColor: props.isThemeDark ? '#A47551' : 'transparent'},
          ]}
        />
      )}
      <View>{children}</View>
    </SafeAreaView>
  </Layout>
);

AppLayout.defaultProps = {
  alignment: 'start',
};

const styles = StyleSheet.create({
  scafold: {
    flex: 1,
    backgroundColor: '#D0B49F',
  },
  topNav: {
    // backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
});

export default AppLayout;
