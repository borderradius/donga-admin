export const state = () => {
  return {
    locales: ['en', 'fr'],
    locale: 'en'
  }
}

export const mutations = {
  SET_LANG(state, locale) {
    // console.warn(locale)
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
