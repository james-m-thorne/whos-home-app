import { StyleSheet } from 'react-native'

const commonStyles = StyleSheet.create({
    flexCenter: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexCenterItems: {
        display: 'flex',
        alignItems: 'center',
    },
    flexCenterContent: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default commonStyles