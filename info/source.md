<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Sources](#sources)
    - [Callbacks](#callbacks)
    - [Life Cycle](#life-cycle)
        - [Init](#init)

<!-- markdown-toc end -->

# Sources #
## Callbacks ##
```typescript
init(store) {}
levelChange(val) {}
experienceAdd(val) {}

module.exports = [init, levelChange, experienceAdd];
```

## Life Cycle##
### Init ###
This will be called as soon as the game is initialized. Use this to define any custom fields to be used within your source directly
```typescript
init(store) {
     store.character.ki_points = store.charater.ki_points || 0; // This is a field we need to use. It may have been initialized in another source, so we're 
     store.races.push({"_id": "race_0", "name": "Human"}); // This is adding a new entry to the Races object in the store
}
```
