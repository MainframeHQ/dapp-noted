const colors = {
  white: '#fff',
  blue: '#1f3464',
  lightBlue: '#00a7e7',
  red: '#da1157',
  lightGray: '#f1f1f1',
  gray: '#f2f2f2',
  darkGray: '#232323',
}

export default {
  components: {
    Button: {
      default: {
        backgroundColor: colors.lightBlue,
        borderColor: colors.lightBlue,
        titleColor: colors.white,

        backgroundHoverColor: colors.white,
        borderHoverColor: colors.white,
        titleHoverColor: colors.darkGray,
      }
    },
  },
  native: {
    ...colors,
    spacing: '20px',
  }
}
