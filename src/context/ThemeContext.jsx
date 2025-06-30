import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Theme state and actions
const initialState = {
  theme: 'light', // 'light' | 'dark'
  primaryColor: 'purple',
  isLoading: false,
  preferences: {
    animations: true,
    reducedMotion: false,
  }
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_PRIMARY_COLOR':
      return { ...state, primaryColor: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'UPDATE_PREFERENCES':
      return { 
        ...state, 
        preferences: { ...state.preferences, ...action.payload } 
      };
    case 'TOGGLE_ANIMATIONS':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          animations: !state.preferences.animations
        }
      };
    default:
      return state;
  }
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem('bettyempire-preferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        dispatch({ type: 'SET_THEME', payload: parsed.theme || 'light' });
        dispatch({ type: 'SET_PRIMARY_COLOR', payload: parsed.primaryColor || 'purple' });
        dispatch({ type: 'UPDATE_PREFERENCES', payload: parsed.preferences || {} });
      } catch (error) {
        console.warn('Failed to load saved preferences:', error);
      }
    }

    // Check for system preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    dispatch({ 
      type: 'UPDATE_PREFERENCES', 
      payload: { reducedMotion: mediaQuery.matches } 
    });

    const handleChange = (e) => {
      dispatch({ 
        type: 'UPDATE_PREFERENCES', 
        payload: { reducedMotion: e.matches } 
      });
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Save preferences to localStorage when they change
  useEffect(() => {
    const preferences = {
      theme: state.theme,
      primaryColor: state.primaryColor,
      preferences: state.preferences
    };
    localStorage.setItem('bettyempire-preferences', JSON.stringify(preferences));
  }, [state.theme, state.primaryColor, state.preferences]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
    document.documentElement.setAttribute('data-color', state.primaryColor);
  }, [state.theme, state.primaryColor]);

  const actions = {
    setTheme: (theme) => dispatch({ type: 'SET_THEME', payload: theme }),
    setPrimaryColor: (color) => dispatch({ type: 'SET_PRIMARY_COLOR', payload: color }),
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    updatePreferences: (prefs) => dispatch({ type: 'UPDATE_PREFERENCES', payload: prefs }),
    toggleAnimations: () => dispatch({ type: 'TOGGLE_ANIMATIONS' }),
  };

  const value = {
    ...state,
    ...actions,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
