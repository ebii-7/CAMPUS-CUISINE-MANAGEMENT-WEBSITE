
import { createSlice } from '@reduxjs/toolkit';

// Check if dark mode is saved in localStorage
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
const savedLanguage = localStorage.getItem('language') || 'english';

const initialState = {
  darkMode: savedDarkMode,
  language: savedLanguage,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode.toString());
      
      // Apply dark mode to document body - this happens in the reducer
      // to ensure it happens regardless of how the action is triggered
      if (state.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
    
    setLanguage(state, action) {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
      
      // In a full internationalization implementation,
      // this would also update the app's language context
    },
  },
});

export const { toggleDarkMode, setLanguage } = uiSlice.actions;
export default uiSlice.reducer;
