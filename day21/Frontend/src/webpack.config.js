module.exports = {
    // ... other webpack configuration options ...
  
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer/"),
      },
    },
  
    // ... other webpack configuration options ...
  };
  