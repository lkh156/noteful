import React from 'react';

const StoreContext = React.createContext({
  handleDelete: () => {},
  updateMessage: () => {},
  clearMessage: () => {},
  updateError: () => {},
  handleAddFolder: () => {},
  handleNoteFolder: () => {},
  "folders": [],
  "notes": []
})

export default StoreContext;